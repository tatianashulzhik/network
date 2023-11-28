import { BaseEntity } from 'typeorm';
import { Privacy } from '../../privacy/entities/privacy.entity';
export declare class Posts extends BaseEntity {
    idPosts: number;
    text: string;
    plasePosition: string;
    tagAPerson: string;
    hashtag: string;
    autor: string;
    createAt: string;
    updatedAt: string;
    idPrivacy: Privacy;
}
