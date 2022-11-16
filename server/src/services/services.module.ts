import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../data/database.module';
import { ProductsService } from './products.service';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ServiceModule {}
