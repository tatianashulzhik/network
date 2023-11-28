import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User_Activity } from '../../user/entities/user-activity.entity';
import { Posts } from '../../post-files/entities/posts.entity';

@Entity('favorites')
export class Favorites extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idFavorites: number;

    @Column({
        type: 'int',
    })
    folder: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => User_Activity, (idUserActivity) => idUserActivity.idUserActivity)
    idUserActivity: User_Activity;

    @ManyToOne(() => Posts, (idPosts) => idPosts.idPosts)
    idPosts: Posts;
}
