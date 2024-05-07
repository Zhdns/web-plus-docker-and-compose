"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsModule = void 0;
const user_module_1 = require("../user/user.module");
const wishlists_controller_1 = require("./wishlists.controller");
const wishlists_service_1 = require("./wishlists.service");
const auth_module_1 = require("../auth/auth.module");
const wishes_module_1 = require("../wishes/wishes.module");
const sequelize_1 = require("@nestjs/sequelize");
const wishes_model_1 = require("../wishes/wishes.model");
const user_model_1 = require("../user/user.model");
const common_1 = require("@nestjs/common");
const wishlistWishes_model_1 = require("../wishlistsWishes/wishlistWishes.model");
const wishlists_model_1 = require("./wishlists.model");
let WishlistsModule = class WishlistsModule {
};
exports.WishlistsModule = WishlistsModule;
exports.WishlistsModule = WishlistsModule = __decorate([
    (0, common_1.Module)({
        controllers: [wishlists_controller_1.WishlistsController],
        providers: [wishlists_service_1.WishlistsService],
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            wishes_module_1.WishesModule,
            sequelize_1.SequelizeModule.forFeature([wishes_model_1.Wishes, user_model_1.User, wishlistWishes_model_1.WishlistWishes, wishlists_model_1.Wishlists]),
        ],
    })
], WishlistsModule);
//# sourceMappingURL=wishlists.module.js.map