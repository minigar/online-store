import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../data/database.module';
import { CartProductsService } from './cart-products.service';
import { ProductsService } from './products.service';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [ProductsService, CartProductsService],
  exports: [ProductsService, CartProductsService],
})
export class ServiceModule {}
