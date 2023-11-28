import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('subscribers')
export class Subscribers extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idSubscribers: number;

    @Column({
        type: 'varchar',
    })
    subscribers: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}