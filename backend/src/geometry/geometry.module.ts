import { Module } from '@nestjs/common';
import { GeometryService } from './geometry.service';
import { GeometryController } from './geometry.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [GeometryController],
  providers: [GeometryService, PrismaService],
})
export class GeometryModule {}
