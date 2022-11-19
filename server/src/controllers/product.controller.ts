import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductBodyModel } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getList() {
    return await this.productsService.getList();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.getById(id);
  }

  @Post()
  async create(@Body() { name, price, quantity, imgUrl }: ProductBodyModel) {
    return await this.productsService.create(name, price, quantity, imgUrl);
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.deleteById(id);
  }
}
