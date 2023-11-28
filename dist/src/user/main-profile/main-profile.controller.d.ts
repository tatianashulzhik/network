import { MainProfileService } from './main-profile.service';
import { CreateMainProfileDto } from '../dto/main-profile-create-dto';
export declare class MainProfileController {
    private MainProfileService;
    constructor(MainProfileService: MainProfileService);
    GetAll(): any;
    create(data: CreateMainProfileDto): any;
}
