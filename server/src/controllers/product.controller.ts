import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { successResponse } from 'src/helpers/success-response';
import { ProductBodyModel } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getList() {
    return successResponse(await this.productsService.getList());
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return successResponse(await this.productsService.getById(id));
  }

  @Post()
  async create(@Body() { name, price, quantity }: ProductBodyModel) {
    return successResponse(
      await this.productsService.create(name, price, quantity),
    );
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return successResponse(await this.productsService.deleteById(id));
  }
}
