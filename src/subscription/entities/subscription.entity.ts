import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('subscription')
export class Subscription extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idSubscription: number;

    @Column({
        type: 'varchar',
    })
    subscription: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}