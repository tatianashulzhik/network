import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Main_Profile } from '../entities/main-profile.entity';
import { MainProfileService } from './main-profile.service';
import { MainProfileController } from './main-profile.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Main_Profile])],
    providers: [MainProfileService],
    exports: [MainProfileService],
    controllers: [MainProfileController],
})
export class MainModule {}
