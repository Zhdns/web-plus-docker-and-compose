"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const user_model_1 = require("./user/user.model");
const user_module_1 = require("./user/user.module");
const wishes_module_1 = require("./wishes/wishes.module");
const wishes_model_1 = require("./wishes/wishes.model");
const auth_module_1 = require("./auth/auth.module");
const offers_module_1 = require("./offers/offers.module");
const offers_model_1 = require("./offers/offers.model");
const wishlistWishes_model_1 = require("./wishlistsWishes/wishlistWishes.model");
const wishlists_model_1 = require("./wishlists/wishlists.model");
const wishlists_module_1 = require("./wishlists/wishlists.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [user_model_1.User, wishes_model_1.Wishes, offers_model_1.Offers, wishlistWishes_model_1.WishlistWishes, wishlists_model_1.Wishlists],
                autoLoadModels: true,
            }),
            user_module_1.UserModule,
            wishes_module_1.WishesModule,
            auth_module_1.AuthModule,
            offers_module_1.OfferModule,
            wishlists_module_1.WishlistsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map