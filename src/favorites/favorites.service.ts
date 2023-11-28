import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorites } from './entities/favorites.entity';
import { CreateFavoritesDto } from './dto/favorite-create-dto';

@Injectable()
export class FavoritesService {
    constructor(
        @InjectRepository(Favorites)
        private readonly userRepository: Repository<Favorites>,
    ) {}
    async getAllFavorites(): Promise<Favorites[]> {
        return await this.userRepository.find();
    }
    async insert(userDetails: CreateFavoritesDto): Promise<Favorites> {
        const favorite: Favorites = this.userRepository.create(userDetails);
        // const { name } = catsDetails;

        // cats.name = name;
        await this.userRepository.save(favorite);
        return favorite;
    }
    async update(id: number, data: Favorites): Promise<void> {
        await this.userRepository.update(id, data);
    }

    async deletBoard(id: number, name: Favorites): Promise<void> {
        const result = await this.userRepository.delete(id);
    }

    async findById(idFavorites: number): Promise<Favorites | undefined> {
        return this.userRepository.findOne({ where: { idFavorites } });
    }
}
