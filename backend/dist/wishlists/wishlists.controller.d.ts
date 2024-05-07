import { WishlistsService } from './wishlists.service';
import { CreateWishlistsDto } from './wishlistsDto/wishlists.dto';
export declare class WishlistsController {
    private wishlistsService;
    constructor(wishlistsService: WishlistsService);
    create(wishlistsDto: CreateWishlistsDto, req: any): Promise<import("./wishlists.model").Wishlists>;
    getWishlists(): Promise<import("./wishlists.model").Wishlists[]>;
    getWishesByUsername(id: number): Promise<import("./wishlists.model").Wishlists>;
}
