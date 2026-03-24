import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { UpdateGlobalPriceDto } from './dto/update-global-price.dto';
import { PriceService } from './price.service';

@Controller('admin/price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  @Public()
  async getPrice() {
    return this.priceService.getGlobalPrice();
  }

  @Post()
  @Roles('ADMIN', 'PRICE_EDITOR')
  async updatePrice(@Body() dto: UpdateGlobalPriceDto) {
    return this.priceService.updateGlobalPrice(dto);
  }
}
