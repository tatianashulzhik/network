import { BaseEntity } from 'typeorm';
import { Posts } from './posts.entity';
import { Files } from './files.entity';
export declare class Post_Files extends BaseEntity {
    idPostFiles: number;
    text: string;
    createAt: string;
    updatedAt: string;
    idPosts: Posts;
    idFiles: Files;
}
