import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Subscribers } from '../../subscribers/entities/subscribers.entity';
import { Messages } from '../../messages/entities/messages.entity';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { Participants } from '../../participants/entities/participants.entity';
import { Dissible_Participants } from '../../dissible-participants/entities/dissible-participants.entity';
import { Event } from '../../event/entities/event.entity';
@Entity('user_activity')
export class User_Activity extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idUserActivity: number;

    @Column({
        type: 'varchar',
    })
    aboutTheUser: string;

    @Column({
        type: 'int',
    })
    interests: string;

    @Column({
        type: 'int',
    })
    idPossibleParticipants: number;

    @ManyToOne(() => Company, (idCompany) => idCompany.idCompany)
    idCompany: Company;

    @ManyToOne(() => Subscribers, (idSubscribers) => idSubscribers.idSubscribers)
    idSubscribers: Subscribers;

    @ManyToOne(() => Messages, (idMessages) => idMessages.idMessages)
    idMessages: Messages;

    @ManyToOne(() => Subscription, (idSubscription) => idSubscription.idSubscription)
    idSubscription: Subscription;

    @ManyToOne(() => Participants, (idParticipants) => idParticipants.idParticipants)
    idParticipants: Participants;

    @ManyToOne(() => Dissible_Participants, (idDissibleParticipants) => idDissibleParticipants.idDissibleParticipants)
    idDissibleParticipants: Dissible_Participants;

    @ManyToOne(() => Event, (idEvent) => idEvent.idEvent)
    idEvent: Event;
}
