import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Code } from './entities/code.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Code])],
})
export class CatsModule {}
