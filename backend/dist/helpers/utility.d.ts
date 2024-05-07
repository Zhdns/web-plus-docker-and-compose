import { ModelStatic, WhereOptions } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
export declare const FOREIGN_USER_SCHEMA: (user: User) => {
    id: number;
    username: string;
    about: string;
    avatar: string;
    email: string;
    createdAt: any;
    updatedAt: any;
};
export declare const FOREIGN_USER_SCHEMA_WITH_WISHES: (user: User) => {
    id: number;
    username: string;
    about: string;
    avatar: string;
    email: string;
    wishes: import("../wishes/wishes.model").Wishes[];
    createdAt: any;
    updatedAt: any;
};
export declare const REQUEST_ID: (req: any) => any;
export declare const FIND_ONE: <T extends Model<any, any>>(repository: ModelStatic<T>, identification: WhereOptions, modelOne?: typeof Model<any>, modelTwo?: typeof Model<any>) => Promise<T>;
export declare const FIND_PK: <T extends Model<any, any>>(repository: ModelStatic<T>, identification: number, modelOne?: typeof Model<any>, modelTwo?: typeof Model<any>) => Promise<T>;
