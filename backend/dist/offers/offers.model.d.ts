import { Model } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Wishes } from 'src/wishes/wishes.model';
interface OfferInterface {
    id: number;
    user: number;
    amount: number;
    hidden: boolean | null;
    itemId: number;
    name: string;
}
export declare class Offers extends Model<Offers, OfferInterface> {
    id: number;
    amount: number;
    hidden: boolean | null;
    name: string;
    itemId: number;
    user: number;
    owner: User;
    item: Wishes;
}
export {};
