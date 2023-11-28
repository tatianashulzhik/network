import { BaseEntity } from 'typeorm';
import { User } from '../../user/entities/user.entity';
export declare class Translation extends BaseEntity {
    idTranslation: number;
    grade: string;
    createAt: string;
    updatedAt: string;
    idUser: User;
}
