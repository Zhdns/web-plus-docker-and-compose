import { Wishlists } from './wishlists.model';
import { CreateWishlistsDto } from './wishlistsDto/wishlists.dto';
import { WishlistWishes } from 'src/wishlistsWishes/wishlistWishes.model';
export declare class WishlistsService {
    private wishlistsRepository;
    private wishlistWishesRepository;
    constructor(wishlistsRepository: typeof Wishlists, wishlistWishesRepository: typeof WishlistWishes);
    createWishlist(dto: CreateWishlistsDto, userid: number): Promise<Wishlists>;
    getWishlists(): Promise<Wishlists[]>;
    getWishlistById(id: number): Promise<Wishlists>;
}
