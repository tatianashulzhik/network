import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts } from './entities/contacts.entity';
import { Edications } from './entities/edications.entity';
import { Gender } from './entities/gender.entity';
import { Last_place_of_work } from './entities/last-place-of-work.entity';
import { Main_Profile } from './entities/main-profile.entity';
import { User_Activity } from './entities/user-activity.entity';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './authoriz/roles.guard';
// import { CaslAbilityFactory } from './authoriz/casl-ability-factory';

@Module({
    imports: [
        TypeOrmModule.forFeature([Contacts, Edications, Gender, Last_place_of_work, Main_Profile, User, User_Activity]),
    ],
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}
