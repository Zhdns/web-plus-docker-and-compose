import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/userDto/createUser.dto';
import { LoginUserDto } from 'src/user/userDto/loginUser.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    private generateToken;
    private validation;
    signUp(userDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        about: string;
        avatar: string;
        access_token: {
            access_token: string;
        };
    }>;
    singIn(userDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
