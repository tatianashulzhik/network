import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Main_Profile } from '../entities/main-profile.entity';
import { CreateMainProfileDto } from '../dto/main-profile-create-dto';

@Injectable()
export class MainProfileService {
    constructor(
        @InjectRepository(Main_Profile)
        private readonly mainRepository: Repository<Main_Profile>,
    ) {}
    async getAllMain(): Promise<Main_Profile[]> {
        return await this.mainRepository.find();
    }
    async insert(catsDetails: CreateMainProfileDto): Promise<Main_Profile> {
        const mainprofile: Main_Profile = this.mainRepository.create(catsDetails);
        // const { name } = catsDetails;

        // cats.name = name;
        await this.mainRepository.save(mainprofile);
        return mainprofile;
    }
}
