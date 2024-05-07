"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const wish_controller_1 = require("./wish.controller");
const wish_service_1 = require("./wish.service");
const wishes_model_1 = require("./wishes.model");
const user_model_1 = require("../user/user.model");
const user_module_1 = require("../user/user.module");
const auth_module_1 = require("../auth/auth.module");
const offers_model_1 = require("../offers/offers.model");
const wishlistWishes_model_1 = require("../wishlistsWishes/wishlistWishes.model");
let WishesModule = class WishesModule {
};
exports.WishesModule = WishesModule;
exports.WishesModule = WishesModule = __decorate([
    (0, common_1.Module)({
        controllers: [wish_controller_1.WishController],
        providers: [wish_service_1.WishService],
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            sequelize_1.SequelizeModule.forFeature([wishes_model_1.Wishes, user_model_1.User, offers_model_1.Offers, wishlistWishes_model_1.WishlistWishes]),
        ],
        exports: [wish_service_1.WishService],
    })
], WishesModule);
//# sourceMappingURL=wishes.module.js.map