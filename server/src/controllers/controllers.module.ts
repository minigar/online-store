import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../data/database.module';
import { HealthController } from './health.controller';
import { ServiceModule } from 'src/services/services.module';
import { ProductsController } from './product.controller';

@Module({
  imports: [ConfigModule, DatabaseModule, ServiceModule],
  controllers: [HealthController, ProductsController],
})
export class ControllersModule {}
