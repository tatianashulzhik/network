import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorites } from './entities/favorites.entity';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
@Module({
    imports: [TypeOrmModule.forFeature([Favorites])],
    providers: [FavoritesService],
    exports: [FavoritesService],
    controllers: [FavoritesController],
})
export class FavoritesModule {}
