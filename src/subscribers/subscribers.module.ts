import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscribers } from './entities/subscribers.entity';
import { SubscribersController } from './subscribers.controller';
import { SubscribersService } from './subscribers.service';
@Module({
    imports: [TypeOrmModule.forFeature([Subscribers])],
    controllers: [SubscribersController],
    providers: [SubscribersService],
    exports: [SubscribersService],
})
export class SubscribersModule {}
