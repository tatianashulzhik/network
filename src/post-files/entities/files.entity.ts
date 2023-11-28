import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('files')
export class Files extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idFiles: number;

    @Column({
        type: 'varchar',
    })
    fileLink: string;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
    })
    extesions: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}