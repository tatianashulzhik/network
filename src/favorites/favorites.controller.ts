import { Body, Controller, Get, Post, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoritesDto } from './dto/favorite-create-dto';
import { Favorites } from './entities/favorites.entity';
//import { CreateMainProfileDto } from '';

@Controller('favorites')
export class FavoritesController {
    constructor(private FavoritesService: FavoritesService) {}

    @Get()
    GetAll() {
        return this.FavoritesService.getAllFavorites();
    }

    @Post()
    create(@Body() data: CreateFavoritesDto) {
        return this.FavoritesService.insert(data);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() todo: Favorites): Promise<void> {
        this.FavoritesService.update(parseInt(id, 10), todo);
    }

    @Delete(':id')
    deleteBoard(@Param('id', ParseIntPipe) id: number, user: Favorites): Promise<void> {
        return this.FavoritesService.deletBoard(id, user);
    }
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Favorites> {
      return this.FavoritesService.findById(parseInt(id, 10));
    }

}
