import { Body, Controller, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create-dto';
 import { User } from './entities/user.entity';
// import { Roles } from './authoriz/roles.decorator';
// import { Role } from './authoriz/role.enum';
// import { PoliciesGuard } from './PoliciesGuard';
// // import { CheckPolicies } from './PolicyHandler';
// import { Action } from './authoriz/action';
// import { AppAbility } from './authoriz/casl-ability-factory';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}

    // @Get()
    // GetAll() {
    //     return this.UserService.getAllUserName();
    // }

    // @Post()
    // create(@Body() data: CreateUserDto) {
    //     return this.UserService.insert(data);
    // }
    @Patch(':id')
    async update(@Param('id') id: string, @Body() todo: User): Promise<void> {
        this.UserService.update(parseInt(id, 10), todo);
    }
    @Post()
    //@Roles(Role.Admin)
    create(@Body() data: CreateUserDto) {
        return this.UserService.insert(data);
    }
    // @Get()
    // @UseGuards(PoliciesGuard)
    // @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Article))
    // findAll() {
    //     return this.UserService.getAllUserName();
    // }
}
