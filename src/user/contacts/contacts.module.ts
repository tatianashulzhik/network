import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { Contacts } from '../entities/contacts.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Contacts]),
    ],
    providers: [ContactsService],
    exports: [ContactsService],
    controllers: [ContactsController],
})
export class ContactModule {}
