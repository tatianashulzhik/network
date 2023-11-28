import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Code } from '../../code/entities/code.entity';
@Entity('contacts')
export class Contacts extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The unique identifier',
    })
    idContacts: number;

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
    ahub_messager: string;

    @Column({
        type: 'text',
    })
    ahub_bank: string;

    @Column({
        type: 'text',
    })
    createAt: string;

    @Column({
        type: 'text',
    })
    updatedAt: string;

    @OneToOne(() => Code)
    @JoinColumn()
    id_code: Code;
    // @OneToMany(() => Code, (id_code) => id_code.id_code) // note: we will create author property in the Photo class below
    // id_code: Code[];
}
