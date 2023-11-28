import { BaseEntity } from 'typeorm';
import { Code } from '../../code/entities/code.entity';
export declare class Contacts extends BaseEntity {
    idContacts: number;
    number: string;
    email: string;
    ahub_messager: string;
    ahub_bank: string;
    createAt: string;
    updatedAt: string;
    id_code: Code;
}
