import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Main_Profile } from './main-profile.entity';
import { Contacts } from './contacts.entity';
import { Gender } from './gender.entity';
import { Last_place_of_work } from './last-place-of-work.entity';
import { Edications } from './edications.entity';
import { User_Activity } from './user-activity.entity';
//import { Role } from '../authoriz/role.enum';
@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idUser: number;

    @Column({
        type: 'text',
    })
    name: string;

    @Column({
        type: 'text',
    })
    password: string;

    @Column({
        type: 'int',
    })
    surname: string;

    @Column({
        type: 'text',
    })
    dataOfBirth: string;

    @Column({
        type: 'text',
    })
    region: string;

    @Column({
        type: 'int',
    })
    languages: string;

    @Column({
        type: 'int',
    })
    avatar: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Main_Profile, (idMainProfile) => idMainProfile.idMainProfile)
    idMainProfile: Main_Profile;

    @ManyToOne(() => Contacts, (idContacts) => idContacts.idContacts)
    idContacts: Contacts;

    @ManyToOne(() => Gender, (idGender) => idGender.idGender)
    idGender: Gender;

    @ManyToOne(() => Last_place_of_work, (idLastPlaceOfWork) => idLastPlaceOfWork.idLastPlaceOfWork)
    idLastPlaceOfWork: Last_place_of_work;

    @ManyToOne(() => Edications, (idEdications) => idEdications.idEdications)
    idEdications: Edications;

    @ManyToOne(() => User_Activity, (idUserActivity) => idUserActivity.idUserActivity)
    idUserActivity: User_Activity;
   // roles: Role[];
    isAdmin: boolean;
}
