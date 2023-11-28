import { Repository } from 'typeorm';
import { Contacts } from '../entities/contacts.entity';
import { CreateContactsDto } from '../dto/contacts-create-dto';
export declare class ContactsService {
    private readonly contactsRepository;
    constructor(contactsRepository: Repository<Contacts>);
    getAllContacts(): Promise<Contacts[]>;
    insert(userDetails: CreateContactsDto): Promise<Contacts>;
    update(id: number, data: Contacts): Promise<void>;
}
