import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user-create-dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(name: string): Promise<User | undefined>;
    getAllUserName(): Promise<User[]>;
    insert(CreateUserDto: CreateUserDto): Promise<User>;
    update(id: number, data: User): Promise<void>;
}
