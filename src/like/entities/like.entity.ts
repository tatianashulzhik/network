import { MESSAGES } from '@nestjs/core/constants';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from '../../post-files/entities/posts.entity';
import { User_Activity } from '../../user/entities/user-activity.entity';

@Entity('like')
export class Like extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idLike: number;

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
