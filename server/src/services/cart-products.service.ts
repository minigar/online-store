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
    const cartProduct = await this.db.cartProduct.findFirst({ where: { id } });

    if (!cartProduct) {
      throw HttpError('Product not found');
    }

    return cartProduct;
  }

  async updateById(
    id: number,
    name: string,
    price: number,
    quantity: number,
    imgUrl: string,
  ) {
    const product = await this.db.cartProduct.findFirst({ where: { id } });

    if (!product) {
      throw HttpError(`Cart product not found`);
    }
    await this.db.cartProduct.update({
      where: { id },
      data: { name, price, quantity, imgUrl },
    });

    const updatedProduct = await this.db.cartProduct.findFirst({
      where: { name },
    });

    return updatedProduct;
  }

  async create(name: string, price: number, quantity: number, imgUrl: string) {
    const cartProduct = await this.db.cartProduct.findFirst({
      where: { name },
    });

    if (cartProduct) {
      throw HttpError(`Product with this name already exist!`);
    }

    await this.db.cartProduct.create({
      data: { name, price, quantity, imgUrl },
    });

    const createdProduct = await this.db.cartProduct.findFirst({
      where: { name },
    });
    return createdProduct;
  }

  async deleteById(id: number) {
    // await this.db.cartProduct.deleteMany({});
    await this.db.cartProduct.delete({ where: { id } });
    return;
  }
}
