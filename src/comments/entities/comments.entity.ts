import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from '../../products/entities/products.entity';

@Entity('comments')
export class Comments extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idComments: number;

    @Column({
        type: 'varchar',
    })
    comments: string;

    @Column({
        type: 'varchar',
    })
    idPosts: string;

    @Column({
        type: 'varchar',
    })
    idAuthor: string;

    @Column({
        type: 'varchar',
    })
    idReplyToComment: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Products, (idProducts) => idProducts.idProducts)
    idProducts: Products;
}
