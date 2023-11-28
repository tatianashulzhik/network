import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Privacy } from './entities/privacy.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Privacy])],
})
export class CatsModule {}
