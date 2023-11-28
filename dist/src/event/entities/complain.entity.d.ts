import { BaseEntity } from "typeorm";
export declare class Complain extends BaseEntity {
    idComplain: number;
    complain: string;
    idUser: number;
    createAt: string;
    updatedAt: string;
}
