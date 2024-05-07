import { Model } from 'sequelize-typescript';
export declare class WishlistWishes extends Model<WishlistWishes> {
    id: number;
    wishlistId: number;
    wishId: number;
}
