import { BaseEntity } from "typeorm";
export declare class Disscusion extends BaseEntity {
    idDisscusion: number;
    author: string;
    comments: string;
    toReplyToComment: string;
    createAt: string;
    updatedAt: string;
}
