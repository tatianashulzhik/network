import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Posts } from './posts.entity';
import { Files } from './files.entity';
@Entity('post_files')
export class Post_Files extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idPostFiles: number;

    @Column({
        type: 'varchar',
    })
    text: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Posts, (idPosts) => idPosts.idPosts)
    idPosts: Posts;

    @ManyToOne(() => Files, (idFiles) => idFiles.idFiles)
    idFiles: Files;
}
