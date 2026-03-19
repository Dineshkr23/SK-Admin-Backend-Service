import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class RequestTimingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const http = context.switchToHttp();
    const req = http.getRequest<{ method?: string; originalUrl?: string; url?: string }>();
    const res = http.getResponse<{ setHeader?: (k: string, v: string) => void; statusCode?: number }>();

    const start = process.hrtime.bigint();
    return next.handle().pipe(
      finalize(() => {
        const end = process.hrtime.bigint();
        const ms = Number(end - start) / 1e6;
        try {
          res?.setHeader?.('x-response-time-ms', ms.toFixed(1));
        } catch {
          // ignore header errors
        }

        if (process.env.LOG_HTTP_TIMINGS === '1') {
          const path = req?.originalUrl ?? req?.url ?? '';
          const status = res?.statusCode ?? 0;
          // eslint-disable-next-line no-console
          console.log(`${req?.method ?? ''} ${path} ${status} ${ms.toFixed(1)}ms`);
        }
      }),
    );
  }
}

