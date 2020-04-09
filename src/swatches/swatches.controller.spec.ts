import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { SwatchesController } from './swatches.controller';
import { SwatchesService } from './swatches.service';
import { Swatch } from './swatch.entity';

describe('Swatch Controller', () => {
  let controller: SwatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
        }),
        TypeOrmModule.forFeature([Swatch])
      ],
      controllers: [SwatchesController],
      providers: [SwatchesService],
    }).compile();

    controller = module.get<SwatchesController>(SwatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
