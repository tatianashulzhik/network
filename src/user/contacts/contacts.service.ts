import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacts } from '../entities/contacts.entity';
import { CreateContactsDto } from '../dto/contacts-create-dto';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contacts)
        private readonly contactsRepository: Repository<Contacts>,
    ) {}
    async getAllContacts(): Promise<Contacts[]> {
        return await this.contactsRepository.find();
    }
    async insert(userDetails: CreateContactsDto): Promise<Contacts> {
        const contacts: Contacts = this.contactsRepository.create(userDetails);
        // const { name } = catsDetails;

        // cats.name = name;
        await this.contactsRepository.save(contacts);
        return contacts;
    }
    async update(id: number, data: Contacts): Promise<void> {
        await this.contactsRepository.update(id, data);
    }
}
