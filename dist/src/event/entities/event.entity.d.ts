import { BaseEntity } from 'typeorm';
import { Dissible_Participants } from '../../dissible-participants/entities/dissible-participants.entity';
import { Participants } from '../../participants/entities/participants.entity';
import { Complain } from './complain.entity';
import { Disscusion } from './disscusion.entity';
export declare class Event extends BaseEntity {
    idEvent: number;
    event: string;
    type: string;
    name: string;
    time: string;
    repeat: string;
    address: string;
    price: string;
    responsible: string;
    interests: string;
    createAt: string;
    updatedAt: string;
    idParticipants: Participants;
    idDissibleParticipants: Dissible_Participants;
    idComplain: Complain;
    idDisscusion: Disscusion;
    idContactsEvent: Disscusion;
}
