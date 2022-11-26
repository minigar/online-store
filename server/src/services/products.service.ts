import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/data/database.service';
import HttpError from 'http-errors';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}
  async getList() {
    const products = await this.db.product.findMany();

    return products;
  }

  async getById(id: number) {
    const product = await this.db.product.findFirst({ where: { id } });

    if (!product) {
      throw HttpError('Product not found');
    }

    return product;
  }

  async updateById(
    id: number,
    name: string,
    price: number,
    quantity: number,
    imgUrl: string,
  ) {
    const product = await this.db.product.findFirst({ where: { id } });

    if (!product) {
      throw HttpError(`Product not found`);
    }
    await this.db.product.update({
      where: { id },
      data: { name, price, quantity, imgUrl },
    });

    const updatedProduct = await this.db.product.findFirst({
      where: { name },
    });

    return updatedProduct;
  }

  async create(name: string, price: number, quantity: number, imgUrl: string) {
    const product = await this.db.product.findFirst({ where: { name } });

    if (product) {
      throw HttpError(`Product with name already exist`);
    }

    await this.db.product.create({ data: { name, price, quantity, imgUrl } });

    const createdProduct = await this.db.product.findFirst({
      where: { name },
    });
    return createdProduct;
  }

  async deleteById(id: number) {
    await this.db.product.delete({ where: { id } });
    return;
  }
}
