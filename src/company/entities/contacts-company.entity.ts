import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('contacts_company')
export class Contacts_Company extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idContactsCompany: number;

    @Column({
        type: 'varchar',
    })
    number: string;

    @Column({
        type: 'text',
    })
    address: string;

    @Column({
        type: 'text',
    })
    ahubMessager: string;

    @Column({
        type: 'text',
    })
    ahubPaiment: string;

    @Column({
        type: 'text',
    })
    storeLink: string;

    @Column({
        type: 'text',
    })
    companyLink: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;
}