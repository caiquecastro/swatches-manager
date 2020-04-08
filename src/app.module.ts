import { Module } from '@nestjs/common';
import { SwatchesModule } from './swatches/swatches.module';

@Module({
  imports: [SwatchesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
