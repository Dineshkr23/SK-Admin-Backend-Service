import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppRole, ROLES_KEY } from '../decorators/roles.decorator';

type UserWithRole = {
  role?: unknown;
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<AppRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // If no roles metadata is set, allow (other guards/filters may still block).
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest<{
      user?: UserWithRole;
    }>();
    const userRole = request.user?.role;

    if (typeof userRole !== 'string') {
      throw new ForbiddenException('Forbidden');
    }

    if (!requiredRoles.includes(userRole as AppRole)) {
      throw new ForbiddenException('Forbidden');
    }

    return true;
  }
}
