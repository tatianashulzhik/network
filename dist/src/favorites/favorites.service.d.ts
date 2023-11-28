import { Repository } from 'typeorm';
import { Favorites } from './entities/favorites.entity';
import { CreateFavoritesDto } from './dto/favorite-create-dto';
export declare class FavoritesService {
    private readonly userRepository;
    constructor(userRepository: Repository<Favorites>);
    getAllFavorites(): Promise<Favorites[]>;
    insert(userDetails: CreateFavoritesDto): Promise<Favorites>;
    update(id: number, data: Favorites): Promise<void>;
    deletBoard(id: number, name: Favorites): Promise<void>;
    findById(idFavorites: number): Promise<Favorites | undefined>;
}
