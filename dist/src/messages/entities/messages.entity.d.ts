import { BaseEntity } from "typeorm";
export declare class Messages extends BaseEntity {
    idMessages: number;
    messages: string;
    messagesReveived: string;
    messageSent: number;
    idFrom: number;
    idTo: number;
    time: number;
    createAt: string;
    updatedAt: string;
}
