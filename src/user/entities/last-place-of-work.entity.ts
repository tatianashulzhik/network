import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('last_place_of_work')
export class Last_place_of_work extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idLastPlaceOfWork: number;

    @Column({
        type: 'varchar',
    })
    jobTitle: string;

    @Column({
        type: 'varchar',
    })
    company: string;

    @Column({
        type: 'text',
    })
    createat: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}