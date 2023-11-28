import { BaseEntity } from 'typeorm';
import { Posts } from '../../post-files/entities/posts.entity';
import { User_Activity } from '../../user/entities/user-activity.entity';
export declare class Like extends BaseEntity {
    idLike: number;
    folder: string;
    createAt: string;
    updatedAt: string;
    idUserActivity: User_Activity;
    idPosts: Posts;
}
