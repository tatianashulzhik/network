import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('contacts_event')
export class Contacts_Event extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idContactsEvent: number;

    @Column({
        type: 'varchar',
    })
    number: string;

    @Column({
        type: 'text',
    })
    email: string;

    @Column({
        type: 'text',
    })
    ahubMessager: string;

    @Column({
        type: 'text',
    })
    ahubBank: string;

    @Column({
        type: 'text',
    })
    createAt: string;
    
    @Column({
        type: 'text',
    })
    updatedAt: string;
}
