import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Company_Address } from './entities/company-address.entity';
import { Contacts_Company } from './entities/contacts-company.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Company, Company_Address, Contacts_Company])],
})
export class CatsModule {}
