import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/userDto/createUser.dto';
import { LoginUserDto } from 'src/user/userDto/loginUser.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(userDto: LoginUserDto, res: any): Promise<void>;
    signUp(userDto: CreateUserDto, res: any): Promise<void>;
}
