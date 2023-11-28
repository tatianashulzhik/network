import { ComplainService } from './complain.service';
import { CreateComplainDto } from '../dto/complain-create-dto';
import { Complain } from '../entities/complain.entity';
export declare class ComplainController {
    private ComplainService;
    constructor(ComplainService: ComplainService);
    GetAll(): any;
    create(data: CreateComplainDto): any;
    findById(id: string): Promise<Complain>;
}
