import { Wishes } from './wishes.model';
import { CreateWishDto } from './wishesDto/createWish.dto';
import { UserService } from 'src/user/user.service';
export declare class WishService {
    private userService;
    private wishesRepository;
    constructor(userService: UserService, wishesRepository: typeof Wishes);
    createWish(dto: CreateWishDto, userId: number): Promise<Wishes>;
    getLastTen(): Promise<Wishes[]>;
    getPopularGift(): Promise<Wishes[]>;
    getWishById(wishId: number): Promise<Wishes>;
    toRaise(raised: number, wishId: number): Promise<Wishes>;
    toCopy(wishId: number): Promise<{
        name: string;
        link: string;
        image: string;
        description: string;
        price: number;
    }>;
    deleteWishById(wishId: number): Promise<{
        message: string;
    }>;
    updateWish(wishId: number, newWish: CreateWishDto, userId: number): Promise<Wishes>;
}
