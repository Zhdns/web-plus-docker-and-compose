import { User } from './user.model';
import { CreateUserDto } from './userDto/createUser.dto';
import { Wishes } from 'src/wishes/wishes.model';
import { UpdateUserDto } from './userDto/updateUser.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByUsername(username: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserByPK(id: number): Promise<User>;
    getUserWishes(userId: number): Promise<Wishes[]>;
    updateUser(userId: number, userDto: UpdateUserDto): Promise<User>;
    deleteUserById(userId: number): Promise<{
        message: string;
    }>;
}
