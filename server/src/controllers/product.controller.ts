import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/common/decorators ';
import { ProductBodyModel } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Public()
  @Get()
  async getList() {
    return await this.productsService.getList();
  }

  @Public()
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() { name, price, quantity, imgUrl }: ProductBodyModel,
  ) {
    return await this.productsService.updateById(
      id,
      name,
      price,
      quantity,
      imgUrl,
    );
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
