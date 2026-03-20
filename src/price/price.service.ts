import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateGlobalPriceDto } from './dto/update-global-price.dto';

const GLOBAL_PRICE_KEY = 'global';

@Injectable()
export class PriceService {
  constructor(private readonly prisma: PrismaService) {}

  async getGlobalPrice(): Promise<{ price: number }> {
    const existing = await this.prisma.globalPrice.findUnique({
      where: { key: GLOBAL_PRICE_KEY },
    });

    if (existing) return { price: existing.price };

    // Ensure the row exists so UI has a value to display.
    await this.prisma.globalPrice.create({
      data: { key: GLOBAL_PRICE_KEY, price: 0 },
    });

    return { price: 0 };
  }

  async updateGlobalPrice(
    dto: UpdateGlobalPriceDto,
  ): Promise<{ price: number }> {
    const updated = await this.prisma.globalPrice.upsert({
      where: { key: GLOBAL_PRICE_KEY },
      create: { key: GLOBAL_PRICE_KEY, price: dto.price },
      update: { price: dto.price },
    });

    return { price: updated.price };
  }
}
