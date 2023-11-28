import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscribers } from './entities/subscribers.entity';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(Subscribers)
        private readonly subscribersRepository: Repository<Subscribers>,
    ) {}
    async getAllFavorites(): Promise<Subscribers[]> {
        return await this.subscribersRepository.find();
    }
    // async insert(userDetails: CreateFavoritesDto): Promise<Subscribers> {
    //     const favorite: Favorites = this.userRepository.create(userDetails);
    //     // const { name } = catsDetails;

    //     // cats.name = name;
    //     await this.userRepository.save(favorite);
    //     return favorite;
    // }

    async deletBoard(id: number, name: Subscribers): Promise<void> {
        const result = await this.subscribersRepository.delete(id);
    }
}
