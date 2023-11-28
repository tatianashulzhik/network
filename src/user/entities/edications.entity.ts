import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('edications')
export class Edications extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idEdications: number;

    @Column({
        type: 'varchar',
    })
    specialization: string;

    @Column({
        type: 'text',
    })
    edicationalInstitute: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}