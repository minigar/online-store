import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../data/database.module';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [ProductsService, UsersService, AuthService, JwtService],
  exports: [ProductsService, UsersService, AuthService, JwtService],
})
export class ServiceModule {}
