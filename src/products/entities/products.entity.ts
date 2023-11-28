import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
@Entity('products')
export class Products extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idProducts: number;

    @Column({
        type: 'text',
    })
    type: string;

    @Column({
        type: 'text',
    })
    place: string;

    @Column({
        type: 'text',
    })
    price: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({
        type: 'text',
    })
    ahubMessenger: string;

    @Column({
        type: 'date',
    })
    data: Date;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Company, (idCompany) => idCompany.idCompany)
    idCompany: Company;
}
