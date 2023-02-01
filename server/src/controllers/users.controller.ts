import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserBodyModel } from 'src/models/user';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getList() {
    return await this.usersService.getList();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.getById(id);
  }

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() { name, email, password }: UserBodyModel) {
    return await this.usersService.create({ name, email, password });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.delete(id);
  }
}
