import { Model } from 'sequelize-typescript';
import { Offers } from 'src/offers/offers.model';
import { Wishes } from 'src/wishes/wishes.model';
interface UserInterface {
    username: string;
    email: string;
    password: string;
    about: string;
    avatar: string;
    wishes: Wishes[];
    offers: Offers[];
}
export declare class User extends Model<User, UserInterface> {
    id: number;
    username: string;
    password: string;
    about: string;
    avatar: string;
    email: string;
    wishes: Wishes[];
    offers: Offers[];
}
export {};
