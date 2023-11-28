import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post_Files } from './entities/post-files.entity';
import { Posts } from './entities/posts.entity';
import { Files } from './entities/files.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Post_Files, Files, Posts])],
})
export class PFModule {}
