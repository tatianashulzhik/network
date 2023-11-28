import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Products])],
})
export class CatsModule {}
