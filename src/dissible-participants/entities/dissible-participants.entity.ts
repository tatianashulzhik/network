import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dissible_participants')
export class Dissible_Participants extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idDissibleParticipants: number;

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