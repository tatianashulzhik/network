import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complain } from '../entities/complain.entity';
import { ComplainService } from './complain.service';
import { ComplainController } from './complain.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Complain]),
    ],
    providers: [ComplainService],
    exports: [ComplainService],
    controllers: [ComplainController],
})
export class ComplainModule {}
