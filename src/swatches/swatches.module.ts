import { Module } from '@nestjs/common';
import { SwatchesController } from './swatches.controller';
import { SwatchesService } from './swatches.service';

@Module({
    controllers: [SwatchesController],
    providers: [SwatchesService],
})
export class SwatchesModule {}
