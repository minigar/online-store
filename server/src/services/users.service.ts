import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/data/database.service';
import HttpError from 'http-errors';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}
  async getList() {
    const users = await this.db.user.findMany();

    return users;
  }

  async getById(id: number) {
    const user = await this.db.user.findFirst({ where: { id } });

    if (!user) {
      throw HttpError('User not found');
    }

    return user;
  }

  async delete(id: number) {
    await this.db.user.delete({ where: { id } });
    return 'deleted';
  }
}
