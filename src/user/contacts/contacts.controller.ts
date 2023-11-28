import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactsDto } from '../dto/contacts-create-dto';
import { Contacts } from '../entities/contacts.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private ContactsService: ContactsService) {}
    @Get()
    GetAll() {
        return this.ContactsService.getAllContacts();
    }
    @Post()
    create(@Body() data: CreateContactsDto) {
        return this.ContactsService.insert(data);
    }
    @Patch(':id')
    async update(@Param('id') id: string, @Body() todo: Contacts): Promise<void> {
        this.ContactsService.update(parseInt(id, 10), todo);
    }
}
