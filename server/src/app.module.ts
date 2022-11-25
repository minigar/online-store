import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { DatabaseModule } from './data/database.module';
import { ProductsController } from './controllers/product.controller';
import { ProductsService } from './services/products.service';
import { CartProductController } from './controllers/cart-products.controller';
import { CartProductsService } from './services/cart-products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthController, ProductsController, CartProductController],
  providers: [ProductsService, CartProductsService],
})
export class AppModule {}
