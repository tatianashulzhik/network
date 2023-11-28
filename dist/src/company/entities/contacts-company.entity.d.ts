import { BaseEntity } from "typeorm";
export declare class Contacts_Company extends BaseEntity {
    idContactsCompany: number;
    number: string;
    address: string;
    ahubMessager: string;
    ahubPaiment: string;
    storeLink: string;
    companyLink: string;
    createAt: string;
    updatedAt: string;
}
