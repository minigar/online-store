import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/data/database.service';
import HttpError from 'http-errors';
import { UserBodyModel } from '../models/user';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}
  async getList() {
    const products = await this.db.user.findMany();

    return products;
  }

  async getById(id: number) {
    const product = await this.db.user.findFirst({ where: { id } });

    if (!product) {
      throw HttpError('User not found');
    }

    return product;
  }

  async create({ name, email, password }: UserBodyModel) {
    //   const user = await this.db.user.findFirst({ where: { email } });

    //   if (user) {
    //     throw HttpError('This email aready exists!');
    //   }

    //   const createdUser = await this.db.user.create({
    //     data: {
    //       name,
    //       email,
    //       password,
    //       hash,
    //     },
    //   });

    //   return createdUser;
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async delete(id) {
    await this.db.user.delete({ where: { id } });
    return 'deleted';
  }
}
