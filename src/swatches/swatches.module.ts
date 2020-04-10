import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwatchesController } from './swatches.controller';
import { SwatchesService } from './swatches.service';
import { SwatchRepository } from './swatch.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SwatchRepository])],
  controllers: [SwatchesController],
  providers: [SwatchesService],
})
export class SwatchesModule {}
