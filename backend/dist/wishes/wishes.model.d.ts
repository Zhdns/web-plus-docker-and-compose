import { Model } from 'sequelize-typescript';
import { Offers } from 'src/offers/offers.model';
import { User } from 'src/user/user.model';
import { Wishlists } from 'src/wishlists/wishlists.model';
interface WishesInterface {
    name: string;
    link: string;
    image: string;
    description: string;
    price: number;
    raised: number;
    copied: number;
    userId: number;
    offers: Offers[];
}
export declare class Wishes extends Model<Wishes, WishesInterface> {
    id: number;
    name: string;
    link: string;
    image: string;
    description: string;
    price: number;
    raised: number;
    copied: number;
    userId: number;
    owner: User;
    offers: Offers[];
    wishlist: Wishlists[];
}
export {};
