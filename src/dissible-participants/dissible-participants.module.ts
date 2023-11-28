import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dissible_Participants } from './entities/dissible-participants.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Dissible_Participants])],
})
export class CatsModule {}
