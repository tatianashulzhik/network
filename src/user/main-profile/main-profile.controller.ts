import { Body, Controller, Get, Post } from '@nestjs/common';
import { MainProfileService } from './main-profile.service';
import { CreateMainProfileDto } from '../dto/main-profile-create-dto';

@Controller('main-profile')
export class MainProfileController {
    constructor(private MainProfileService: MainProfileService) {}

    @Get()
    GetAll() {
        return this.MainProfileService.getAllMain();
    }

    @Post()
    create(@Body() data: CreateMainProfileDto) {
        return this.MainProfileService.insert(data);
    }
}
