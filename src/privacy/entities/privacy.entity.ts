import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('privacy')
export class Privacy extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idPrivacy: number;

    @Column({
        type: 'varchar',
    })
    type: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}