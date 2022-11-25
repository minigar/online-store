import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/data/database.service';
import HttpError from 'http-errors';

@Injectable()
export class CartProductsService {
  constructor(private readonly db: DatabaseService) {}
  async getList() {
    const cartProducts = await this.db.cartProduct.findMany();

    return cartProducts;
  }

  async getById(id: number) {
    const product = await this.db.cartProduct.findFirst({ where: { id } });

    if (!product) {
      throw HttpError('Product not found');
    }

    return product;
  }

  async create(name: string, price: number, imgUrl: string) {
    const product = await this.db.cartProduct.findFirst({ where: { name } });

    if (product) {
      throw HttpError(`Product with name already exist`);
    }

    await this.db.cartProduct.create({
      data: { name, price, imgUrl },
    });

    const createdProduct = await this.db.cartProduct.findFirst({
      where: { name },
    });
    return createdProduct;
  }

  async deleteById(id: number) {
    await this.db.cartProduct.delete({ where: { id } });
    return;
  }
}
