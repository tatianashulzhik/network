import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complain } from './entities/complain.entity';
import { Contacts_Event } from './entities/contacts_event.entity';
import { Disscusion } from './entities/disscusion.entity';
import { Event } from './entities/event.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Complain, Contacts_Event, Disscusion, Event])],
})
export class EventModule {}
