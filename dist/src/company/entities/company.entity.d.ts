import { BaseEntity } from 'typeorm';
import { Contacts_Company } from './contacts-company.entity';
export declare class Company extends BaseEntity {
    idCompany: number;
    employees: string;
    researchers: string;
    patens: string;
    certificates: string;
    descriptions: string;
    interests: string;
    cover: string;
    logo: string;
    industry: string;
    type: string;
    size: string;
    createAt: string;
    updatedAt: string;
    idCompanyAddress: Company;
    idContactsCompany: Contacts_Company;
}
