import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('main_profile')
export class Main_Profile extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idMainProfile: number;

    @Column({
        type: 'varchar',
    })
    profile_type: string;

    @Column({
        type: 'text',
    })
    cover: string;

    @Column({
        type: 'text',
    })
    language: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}
