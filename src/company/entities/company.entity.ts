import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company_Address } from './company-address.entity';
import { Contacts_Company } from './contacts-company.entity';
@Entity('company')
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idCompany: number;

    @Column({
        type: 'varchar',
    })
    employees: string;

    @Column({
        type: 'text',
    })
    researchers: string;

    @Column({
        type: 'text',
    })
    patens: string;

    @Column({
        type: 'text',
    })
    certificates: string;

    @Column({
        type: 'text',
    })
    descriptions: string;

    @Column({
        type: 'text',
    })
    interests: string;

    @Column({
        type: 'text',
    })
    cover: string;

    @Column({
        type: 'text',
    })
    logo: string;

    @Column({
        type: 'text',
    })
    industry: string;

    @Column({
        type: 'text',
    })
    type: string;

    @Column({
        type: 'text',
    })
    size: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Company_Address, (idCompanyAddress) => idCompanyAddress.idCompanyAddress)
    idCompanyAddress: Company;

    @ManyToOne(() => Contacts_Company, (idContactsCompany) => idContactsCompany.idContactsCompany)
    idContactsCompany: Contacts_Company;
}
