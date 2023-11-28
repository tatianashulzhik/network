//import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dirname } from 'path';
//import { Ahab } from 'src/entities/ahub.entity';
import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

//export const typeOrmConfig: TypeOrmModuleOptions = {
export default registerAs('database', () => ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'AHUB',
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    //entities: [Cats],
    //entities: [User],
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    migrations: [`${__dirname}/../../db/migrations/*{.ts,.js}`],
    migrationsTableName: 'migrations',
    autoLoadEntities: true,
    namingStrategy: new SnakeNamingStrategy(),
}));
