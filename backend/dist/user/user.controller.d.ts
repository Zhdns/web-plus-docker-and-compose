import { UserService } from './user.service';
import { CreateUserDto } from './userDto/createUser.dto';
import { FindUserDto } from './userDto/findUser.dro';
import { UpdateUserDto } from './userDto/updateUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userDto: CreateUserDto): Promise<import("./user.model").User>;
    getAllUsers(): Promise<import("./user.model").User[]>;
    getOwnUser(req: any): any;
    getOwnWishes(req: any): Promise<import("../wishes/wishes.model").Wishes[]>;
    getUserByName(username: string): Promise<import("./user.model").User>;
    getWishesByUsername(username: string): Promise<import("../wishes/wishes.model").Wishes[]>;
    findUser(payload: FindUserDto): Promise<{
        id: number;
        username: string;
        about: string;
        avatar: string;
        email: string;
        createdAt: any;
        updatedAt: any;
    }>;
    updateUser(userDto: UpdateUserDto, req: any): Promise<import("./user.model").User>;
}
