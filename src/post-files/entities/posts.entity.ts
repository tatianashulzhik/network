import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Privacy } from '../../privacy/entities/privacy.entity';
@Entity('posts')
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idPosts: number;

    @Column({
        type: 'varchar',
    })
    text: string;

    @Column({
        type: 'varchar',
    })
    plasePosition: string;

    @Column({
        type: 'varchar',
    })
    tagAPerson: string;

    @Column({
        type: 'varchar',
    })
    hashtag: string;

    @Column({
        type: 'varchar',
    })
    autor: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Privacy, (idPrivacy) => idPrivacy.idPrivacy)
    idPrivacy: Privacy;
}
