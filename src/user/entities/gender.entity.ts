import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('gender')
export class Gender extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idGender: number;

    @Column({
        type: 'varchar',
    })
    gender: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}