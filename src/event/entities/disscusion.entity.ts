import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('disscusion')
export class Disscusion extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idDisscusion: number;

    @Column({
        type: 'varchar',
    })
    author: string;

    @Column({
        type: 'varchar',
    })
    comments: string;

    @Column({
        type: 'varchar',
    })
    toReplyToComment: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;
}