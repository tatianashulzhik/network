import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Translation } from './entities/translation.entity'; 
@Module({
    imports: [TypeOrmModule.forFeature([Translation])],
})
export class CatsModule {}
