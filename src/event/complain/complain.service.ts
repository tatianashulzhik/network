import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complain } from '../entities/complain.entity';
import { CreateComplainDto } from '../dto/complain-create-dto';
@Injectable()
export class ComplainService {
    constructor(
        @InjectRepository(Complain)
        private readonly complainRepository: Repository<Complain>,
    ) {}
    async getAllMain(): Promise<Complain[]> {
        return await this.complainRepository.find();
    }
    async insert(catsDetails: CreateComplainDto): Promise<Complain> {
        const mainprofile: Complain = this.complainRepository.create(catsDetails);
        // const { name } = catsDetails;

        // cats.name = name;
        await this.complainRepository.save(mainprofile);
        return mainprofile;
    }
    async findById(idComplain: number): Promise<Complain | undefined> {
        return this.complainRepository.findOne({ where: { idComplain } });
    }
}
