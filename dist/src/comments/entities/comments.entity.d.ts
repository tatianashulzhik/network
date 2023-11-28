import { BaseEntity } from 'typeorm';
import { Products } from '../../products/entities/products.entity';
export declare class Comments extends BaseEntity {
    idComments: number;
    comments: string;
    idPosts: string;
    idAuthor: string;
    idReplyToComment: string;
    createAt: string;
    updatedAt: string;
    idProducts: Products;
}
