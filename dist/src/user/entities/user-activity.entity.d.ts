import { BaseEntity } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Subscribers } from '../../subscribers/entities/subscribers.entity';
import { Messages } from '../../messages/entities/messages.entity';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { Participants } from '../../participants/entities/participants.entity';
import { Dissible_Participants } from '../../dissible-participants/entities/dissible-participants.entity';
import { Event } from '../../event/entities/event.entity';
export declare class User_Activity extends BaseEntity {
    idUserActivity: number;
    aboutTheUser: string;
    interests: string;
    idPossibleParticipants: number;
    idCompany: Company;
    idSubscribers: Subscribers;
    idMessages: Messages;
    idSubscription: Subscription;
    idParticipants: Participants;
    idDissibleParticipants: Dissible_Participants;
    idEvent: Event;
}
