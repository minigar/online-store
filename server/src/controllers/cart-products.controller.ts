import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CurrentUser } from 'src/common/decorators ';
import { ProductBodyModel } from 'src/models/product';
import { CartProductsService } from 'src/services/cart-products.service';

@Controller('cart-products')
export class CartProductController {
  constructor(private readonly cartProductsService: CartProductsService) {}

  @Get()
  async getList() {
    return await this.cartProductsService.getList();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.cartProductsService.getById(id);
  }

  @Post()
  async create(
    @Body() { name, price, quantity, imgUrl }: ProductBodyModel,
    @CurrentUser('userId') userId: number,
  ) {
    return await this.cartProductsService.create(
      name,
      price,
      quantity,
      imgUrl,
      userId,
    );
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return await this.cartProductsService.deleteById(id);
  }
}
