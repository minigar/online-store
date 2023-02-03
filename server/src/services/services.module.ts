import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../data/database.module';
import { CartProductsService } from './cart-products.service';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [
    ProductsService,
    CartProductsService,
    UsersService,
    AuthService,
    JwtService,
  ],
  exports: [
    ProductsService,
    CartProductsService,
    UsersService,
    AuthService,
    JwtService,
  ],
})
export class ServiceModule {}
