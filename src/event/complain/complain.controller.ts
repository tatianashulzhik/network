import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComplainService } from './complain.service';
import { CreateComplainDto } from '../dto/complain-create-dto';
import { Complain } from '../entities/complain.entity';

@Controller('complain')
export class ComplainController {
    constructor(private ComplainService: ComplainService) {}
    @Get()
    GetAll() {
        return this.ComplainService.getAllMain();
    }

    @Post()
    create(@Body() data: CreateComplainDto) {
        return this.ComplainService.insert(data);
    }
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Complain> {
      return this.ComplainService.findById(parseInt(id, 10));
    }
}
