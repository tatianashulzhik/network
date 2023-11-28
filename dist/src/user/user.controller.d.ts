import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create-dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    update(id: string, todo: User): Promise<void>;
    create(data: CreateUserDto): any;
}
