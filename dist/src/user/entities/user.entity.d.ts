import { BaseEntity } from 'typeorm';
import { Main_Profile } from './main-profile.entity';
import { Contacts } from './contacts.entity';
import { Gender } from './gender.entity';
import { Last_place_of_work } from './last-place-of-work.entity';
import { Edications } from './edications.entity';
import { User_Activity } from './user-activity.entity';
export declare class User extends BaseEntity {
    idUser: number;
    name: string;
    password: string;
    surname: string;
    dataOfBirth: string;
    region: string;
    languages: string;
    avatar: string;
    createAt: string;
    updatedAt: string;
    idMainProfile: Main_Profile;
    idContacts: Contacts;
    idGender: Gender;
    idLastPlaceOfWork: Last_place_of_work;
    idEdications: Edications;
    idUserActivity: User_Activity;
    isAdmin: boolean;
}
