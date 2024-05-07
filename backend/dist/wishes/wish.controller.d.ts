import { WishService } from './wish.service';
import { CreateWishDto } from './wishesDto/createWish.dto';
export declare class WishController {
    private wishService;
    constructor(wishService: WishService);
    create(wishesDto: CreateWishDto, req: any): Promise<import("./wishes.model").Wishes>;
    getLatTen(): Promise<import("./wishes.model").Wishes[]>;
    getTopTen(): Promise<import("./wishes.model").Wishes[]>;
    getOwnWish(id: number): Promise<import("./wishes.model").Wishes>;
    copyWish(id: number, req: any): Promise<import("./wishes.model").Wishes>;
    dleteWish(id: number, req: any): Promise<{
        message: string;
    }>;
}
