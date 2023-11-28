import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig, DatabaseConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './user/auth/auth.module';
import { MainModule } from './user/main-profile/main-profile.module';
import { ContactsController } from './user/contacts/contacts.controller';
import { ContactModule } from './user/contacts/contacts.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ComplainController } from './event/complain/complain.controller';
import { ComplainModule } from './event/complain/complain.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { CaslModule } from './casl/casl.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [AppConfig, DatabaseConfig],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                ...configService.get('database'),
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        MainModule,
        ContactModule,
        FavoritesModule,
        ComplainModule,
        SubscribersModule,
        CaslModule,
    ],
    controllers: [ContactsController, ComplainController],
})
export class AppModule {}
