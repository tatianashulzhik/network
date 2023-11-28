import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user-create-dto';
import { encodePassword } from './utils/bcrypt';
import { Console } from 'console';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findOne(name: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { name } });
    }
    async getAllUserName(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async insert(CreateUserDto: CreateUserDto): Promise<User> {
        const password = encodePassword(CreateUserDto.password);
        const newUser: User = this.userRepository.create({ ...CreateUserDto, password });
        // await this.userRepository.save(mainprofile);
        // return mainprofile;
        return this.userRepository.save(newUser);
    }
    async update(id: number, data: User): Promise<void> {
        await this.userRepository.update(id, data);
    }
}
