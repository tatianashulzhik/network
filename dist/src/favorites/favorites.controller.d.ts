import { FavoritesService } from './favorites.service';
import { CreateFavoritesDto } from './dto/favorite-create-dto';
import { Favorites } from './entities/favorites.entity';
export declare class FavoritesController {
    private FavoritesService;
    constructor(FavoritesService: FavoritesService);
    GetAll(): any;
    create(data: CreateFavoritesDto): any;
    update(id: string, todo: Favorites): Promise<void>;
    deleteBoard(id: number, user: Favorites): Promise<void>;
    findById(id: string): Promise<Favorites>;
}
