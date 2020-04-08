import { Test, TestingModule } from '@nestjs/testing';
import { SwatchesController } from './swatches.controller';
import { SwatchesService } from './swatches.service';

describe('Swatch Controller', () => {
  let controller: SwatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwatchesController],
      providers: [SwatchesService],
    }).compile();

    controller = module.get<SwatchesController>(SwatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
