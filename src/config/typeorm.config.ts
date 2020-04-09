import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
};