import { Repository } from 'typeorm';
import { Complain } from '../entities/complain.entity';
import { CreateComplainDto } from '../dto/complain-create-dto';
export declare class ComplainService {
    private readonly complainRepository;
    constructor(complainRepository: Repository<Complain>);
    getAllMain(): Promise<Complain[]>;
    insert(catsDetails: CreateComplainDto): Promise<Complain>;
    findById(idComplain: number): Promise<Complain | undefined>;
}
