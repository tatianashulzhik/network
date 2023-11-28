import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dissible_Participants } from '../../dissible-participants/entities/dissible-participants.entity';
import { Participants } from '../../participants/entities/participants.entity';
import { Complain } from './complain.entity';
import { Disscusion } from './disscusion.entity';
import { Contacts_Event } from './contacts_event.entity';

@Entity('event')
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idEvent: number;

    @Column({
        type: 'varchar',
    })
    event: string;

    @Column({
        type: 'varchar',
    })
    type: string;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
    })
    time: string;

    @Column({
        type: 'varchar',
    })
    repeat: string;

    @Column({
        type: 'varchar',
    })
    address: string;

    @Column({
        type: 'varchar',
    })
    price: string;

    @Column({
        type: 'varchar',
    })
    responsible: string;

    @Column({
        type: 'varchar',
    })
    interests: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @ManyToOne(() => Participants, (idParticipants) => idParticipants.idParticipants)
    idParticipants: Participants;

    @ManyToOne(() => Dissible_Participants, (idDissibleParticipants) => idDissibleParticipants.idDissibleParticipants)
    idDissibleParticipants: Dissible_Participants;

    @ManyToOne(() => Complain, (idComplain) => idComplain.idComplain)
    idComplain: Complain;

    @ManyToOne(() => Disscusion, (idDisscusion) => idDisscusion.idDisscusion)
    idDisscusion: Disscusion;

    @ManyToOne(() => Contacts_Event, (idContactsEvent) => idContactsEvent.idContactsEvent)
    idContactsEvent: Disscusion;
}
