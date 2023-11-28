import { BaseEntity } from "typeorm";
export declare class Files extends BaseEntity {
    idFiles: number;
    fileLink: string;
    name: string;
    extesions: string;
    createAt: string;
    updatedAt: string;
}
