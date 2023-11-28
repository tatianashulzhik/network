import { SubscribersService } from './subscribers.service';
import { Subscribers } from './entities/subscribers.entity';
export declare class SubscribersController {
    private SubscribersService;
    constructor(SubscribersService: SubscribersService);
    GetAll(): any;
    deleteBoard(id: number, subscribers: Subscribers): Promise<void>;
}
