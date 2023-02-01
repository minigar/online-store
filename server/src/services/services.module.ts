import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../data/database.module';
import { CartProductsService } from './cart-products.service';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [ProductsService, CartProductsService, UsersService],
  exports: [ProductsService, CartProductsService, UsersService],
})
export class ServiceModule {}
