import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { DatabaseModule } from './data/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
