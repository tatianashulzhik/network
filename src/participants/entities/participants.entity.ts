import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('participants')
export class Participants extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idParticipants: number;

    @Column({
        type: 'varchar',
    })
    idEventCreate: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}