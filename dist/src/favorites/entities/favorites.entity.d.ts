import { BaseEntity } from 'typeorm';
import { User_Activity } from '../../user/entities/user-activity.entity';
import { Posts } from '../../post-files/entities/posts.entity';
export declare class Favorites extends BaseEntity {
    idFavorites: number;
    folder: string;
    createAt: string;
    updatedAt: string;
    idUserActivity: User_Activity;
    idPosts: Posts;
}
