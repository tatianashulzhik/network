import { BaseEntity } from 'typeorm';
export declare class Contacts_Event extends BaseEntity {
    idContactsEvent: number;
    number: string;
    email: string;
    ahubMessager: string;
    ahubBank: string;
    createAt: string;
    updatedAt: string;
}
