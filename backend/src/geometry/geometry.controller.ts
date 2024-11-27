import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GeometryService } from './geometry.service';
import { CreateGeometryDto } from './dto/create-geometry.dto';
import { UpdateGeometryDto } from './dto/update-geometry.dto';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post()
  create(@Body() createGeometryDto: CreateGeometryDto) {
    return this.geometryService.create(createGeometryDto);
  }

  @Get()
  findAll() {
    return this.geometryService.findAll();
  }

  @Get('pagination')
  pagination(@Query('page') currentpage?: string) {

    if (currentpage) {
      return this.geometryService.pagination(+currentpage);
    }
    else{
      return this.geometryService.pagination(0);
    }
  }

  @Get('orderby/:order')
  orderBy(@Param('order') order: string) {
    return this.geometryService.orderBy(order)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geometryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeometryDto: UpdateGeometryDto) {
    return this.geometryService.update(+id, updateGeometryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geometryService.remove(+id);
  }
}
