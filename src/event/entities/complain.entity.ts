import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('complain')
export class Complain extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idComplain: number;
    // idComplain: number; // ! typeorm config snake case naming strategy install lib

    @Column({
        type: 'varchar',
    })
    complain: string;

    @Column({
        type: 'varchar',
    })
    idUser: number;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;
}