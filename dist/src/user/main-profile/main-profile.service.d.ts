import { Repository } from 'typeorm';
import { Main_Profile } from '../entities/main-profile.entity';
import { CreateMainProfileDto } from '../dto/main-profile-create-dto';
export declare class MainProfileService {
    private readonly mainRepository;
    constructor(mainRepository: Repository<Main_Profile>);
    getAllMain(): Promise<Main_Profile[]>;
    insert(catsDetails: CreateMainProfileDto): Promise<Main_Profile>;
}
