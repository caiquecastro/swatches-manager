import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwatchesModule } from './swatches/swatches.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SwatchesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
