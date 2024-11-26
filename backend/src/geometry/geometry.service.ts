import { Injectable } from '@nestjs/common';
import { CreateGeometryDto } from './dto/create-geometry.dto';
import { UpdateGeometryDto } from './dto/update-geometry.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GeometryService {
  constructor(private readonly db: PrismaService) {}

  create(createGeometryDto: CreateGeometryDto) {
    return 'This action adds a new geometry';
  }

  findAll() {
    return this.db.minimalgeometry.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} geometry`;
  }

  update(id: number, updateGeometryDto: UpdateGeometryDto) {
    return this.db.minimalgeometry.update({
      where: {id},
      data: updateGeometryDto
    });
  }

  remove(id: number) {
    return this.db.minimalgeometry.delete({
      where: { id }
    });
  }
}
