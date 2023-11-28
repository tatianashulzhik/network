import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messages } from './entities/messages.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Messages])],
})
export class CatsModule {}
