import { Repository } from 'typeorm';
import { Subscribers } from './entities/subscribers.entity';
export declare class SubscribersService {
    private readonly subscribersRepository;
    constructor(subscribersRepository: Repository<Subscribers>);
    getAllFavorites(): Promise<Subscribers[]>;
    deletBoard(id: number, name: Subscribers): Promise<void>;
}
