import { BaseEntity } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
export declare class Products extends BaseEntity {
    idProducts: number;
    type: string;
    place: string;
    price: string;
    description: string;
    ahubMessenger: string;
    data: Date;
    createAt: string;
    updatedAt: string;
    idCompany: Company;
}
