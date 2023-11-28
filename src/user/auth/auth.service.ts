import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePasswords, encodePassword } from '../utils/bcrypt';
import { compare, bcrypt } from 'bcrypt';
import { CreateUserDto } from '../dto/user-create-dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}
    async signIn(id, pass) {
        const user = await this.userService.findOne(id);
        if (user) {
            const matched = compare(pass, user.password);
            if (matched) {
                const payload = { sub: user.idUser, username: user.name };
                const access_token = await this.jwtService.signAsync(payload);
                return {
                    access_token: access_token,
                };
            } else {
                return 'wrong password';
            }
        } else {
            throw new UnauthorizedException();
        }
    }
}
