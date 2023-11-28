import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participants } from './entities/participants.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Participants])],
})
export class CatsModule {}
