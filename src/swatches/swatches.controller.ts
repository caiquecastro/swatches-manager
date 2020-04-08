import { Controller, Get } from '@nestjs/common';
import { SwatchesService } from './swatches.service';
import { Swatch } from './interfaces/swatch.interface';

@Controller('swatches')
export class SwatchesController {
    constructor(private swatchesService: SwatchesService) {}

    @Get('/')
    findAll(): Promise<Swatch[]> {
        return this.swatchesService.findAll();
    }
}
