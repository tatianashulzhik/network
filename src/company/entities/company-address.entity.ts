import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('company_address')
export class Company_Address extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idCompanyAddress: number;

    @Column({
        type: 'varchar',
    })
    divisionName: string;

    @Column({
        type: 'text',
    })
    telephone: string;

    @Column({
        type: 'text',
    })
    email: string;

    @Column({
        type: 'boolean',
    })
    main: boolean;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;
}
