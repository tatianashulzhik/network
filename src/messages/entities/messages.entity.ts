import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('messages')
export class Messages extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idMessages: number;

    @Column({
        type: 'varchar',
    })
    messages: string;

    @Column({
        type: 'int',
    })
    messagesReveived: string;

    @Column({
        type: 'int',
    })
    messageSent: number;

    @Column({
        type: 'int',
    })
    idFrom: number;

    @Column({
        type: 'int',
    })
    idTo: number;

    @Column({
        type: 'int',
    })
    time: number;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}