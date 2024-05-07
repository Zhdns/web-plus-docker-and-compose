import { Model } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Wishes } from 'src/wishes/wishes.model';
interface WishlistsInterface {
    name: string;
    image: string;
    ownerId: number;
    owner: number;
    wishes: Wishes[];
    itemsId: number[];
}
export declare class Wishlists extends Model<Wishlists, WishlistsInterface> {
    id: number;
    name: string;
    image: string;
    ownerId: number;
    items: Wishes[];
    owner: User;
}
export {};
