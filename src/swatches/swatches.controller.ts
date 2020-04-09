import { Controller, Get, Body, Post, Param, ParseIntPipe } from '@nestjs/common';
import { SwatchesService } from './swatches.service';
import { Swatch } from './interfaces/swatch.interface';
import { CreateSwatchDto } from './dto/create-swatch.dto';

@Controller('swatches')
export class SwatchesController {
    constructor(private swatchesService: SwatchesService) {}

    @Get('/')
    findAll(): Promise<Swatch[]> {
        return this.swatchesService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Swatch> {
        return this.swatchesService.findOne(id);
    }

    @Post('/')
    create(@Body() createSwatchDto: CreateSwatchDto) {
        return this.swatchesService.create(createSwatchDto);
    }
}
