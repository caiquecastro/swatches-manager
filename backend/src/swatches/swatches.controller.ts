import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  ParseIntPipe,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SwatchesService } from './swatches.service';
import { Swatch } from './interfaces/swatch.interface';
import { CreateSwatchDto } from './dto/create-swatch.dto';
import { UpdateSwatchDto } from './dto/update-swatch.dto';

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
  @UsePipes(ValidationPipe)
  create(@Body() createSwatchDto: CreateSwatchDto): Promise<Swatch> {
    return this.swatchesService.create(createSwatchDto);
  }

  @Put('/:id')
  updateSwatch(
    @Param('id') id: number,
    @Body() updateSwatchDto: UpdateSwatchDto,
  ): Promise<Swatch> {
    return this.swatchesService.update(id, updateSwatchDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.swatchesService.remove(id);
  }
}
