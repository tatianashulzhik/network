import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Favorites } from 'src/favorites/entities/favorites.entity';
import { SubscribersService } from './subscribers.service';
import { Subscribers } from './entities/subscribers.entity';

@Controller('subscribers')
export class SubscribersController {
        constructor(private SubscribersService: SubscribersService) {}
    
        @Get()
        GetAll() {
            return this.SubscribersService.getAllFavorites();
        }
    
        // @Post()
        // create(@Body() data: CreateFavoritesDto) {
        //     return this.FavoritesService.insert(data);
        // }

    
        @Delete(':id')
        deleteBoard(@Param('id', ParseIntPipe) id: number, subscribers: Subscribers): Promise<void> {
            return this.SubscribersService.deletBoard(id, subscribers);
        }
        
}
