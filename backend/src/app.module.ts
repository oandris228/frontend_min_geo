import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeometryModule } from './geometry/geometry.module';

@Module({
  imports: [GeometryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
