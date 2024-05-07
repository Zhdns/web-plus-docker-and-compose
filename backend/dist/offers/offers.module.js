"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferModule = void 0;
const common_1 = require("@nestjs/common");
const offers_controller_1 = require("./offers.controller");
const offers_service_1 = require("./offers.service");
const user_module_1 = require("../user/user.module");
const wishes_module_1 = require("../wishes/wishes.module");
const auth_module_1 = require("../auth/auth.module");
const sequelize_1 = require("@nestjs/sequelize");
const wishes_model_1 = require("../wishes/wishes.model");
const user_model_1 = require("../user/user.model");
const offers_model_1 = require("./offers.model");
let OfferModule = class OfferModule {
};
exports.OfferModule = OfferModule;
exports.OfferModule = OfferModule = __decorate([
    (0, common_1.Module)({
        controllers: [offers_controller_1.OffersController],
        providers: [offers_service_1.OffersService],
        imports: [
            user_module_1.UserModule,
            wishes_module_1.WishesModule,
            auth_module_1.AuthModule,
            sequelize_1.SequelizeModule.forFeature([wishes_model_1.Wishes, user_model_1.User, offers_model_1.Offers]),
        ],
    })
], OfferModule);
//# sourceMappingURL=offers.module.js.map