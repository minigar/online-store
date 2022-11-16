import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { DatabaseModule } from './data/database.module';
import { ProductsController } from './controllers/product.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
