import { ContactsService } from './contacts.service';
import { CreateContactsDto } from '../dto/contacts-create-dto';
import { Contacts } from '../entities/contacts.entity';
export declare class ContactsController {
    private ContactsService;
    constructor(ContactsService: ContactsService);
    GetAll(): any;
    create(data: CreateContactsDto): any;
    update(id: string, todo: Contacts): Promise<void>;
}
