import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { Public } from '../common/decorators /Public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getList() {
    return await this.usersService.getList();
  }

  @Public()
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.delete(id);
  }
}
