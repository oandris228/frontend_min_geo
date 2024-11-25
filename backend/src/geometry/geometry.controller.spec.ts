import { Test, TestingModule } from '@nestjs/testing';
import { GeometryController } from './geometry.controller';
import { GeometryService } from './geometry.service';

describe('GeometryController', () => {
  let controller: GeometryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeometryController],
      providers: [GeometryService],
    }).compile();

    controller = module.get<GeometryController>(GeometryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
