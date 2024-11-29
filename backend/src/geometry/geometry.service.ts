import { Injectable } from '@nestjs/common';
import { CreateGeometryDto } from './dto/create-geometry.dto';
import { UpdateGeometryDto } from './dto/update-geometry.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GeometryService {
  
  constructor(private readonly db: PrismaService) {}

  create(createGeometryDto: CreateGeometryDto) {
    console.log("function lefut")
    return this.db.minimalgeometry.create({
      data: createGeometryDto
    });
  }

  findAll() {
    return this.db.minimalgeometry.findMany();
  }

  findOne(id: number) {
    return this.db.minimalgeometry.findUnique({ where: {id}});
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

  orderBy(order: string) {
    if (order == "desc") {
      return this.db.minimalgeometry.findMany({
        orderBy: {coolness: 'desc'},
      });
    }
    else {
      return this.db.minimalgeometry.findMany({
        orderBy: {coolness: 'asc'},
      });
    }
  }

  pagination(currentpage: number) {
    return this.db.minimalgeometry.findMany({
      take: 5,
      skip: 5*currentpage
    })
  }
}
