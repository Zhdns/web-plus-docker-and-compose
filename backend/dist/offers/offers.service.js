"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const offers_model_1 = require("./offers.model");
const user_service_1 = require("../user/user.service");
const wish_service_1 = require("../wishes/wish.service");
const errors_1 = require("../helpers/errors");
const constants_1 = require("../helpers/constants");
const utility_1 = require("../helpers/utility");
let OffersService = class OffersService {
    constructor(offersRepasitory, userService, wishesService) {
        this.offersRepasitory = offersRepasitory;
        this.userService = userService;
        this.wishesService = wishesService;
    }
    async createOffer(dto, userId, itemId) {
        const user = await this.userService.getUserByPK(userId);
        const item = await this.wishesService.getWishById(itemId);
        if (!user) {
            throw new common_1.UnauthorizedException({ message: 'User not found' });
        }
        if (!item) {
            throw new common_1.UnauthorizedException({ message: 'Item not found' });
        }
        if (item.userId === userId) {
            throw new common_1.UnauthorizedException({
                message: (0, errors_1.WISH_BELONGING_ERROR)(constants_1.LANGUAGE.RU),
            });
        }
        if (dto.amount > (item.price - item.raised)) {
            throw new common_1.UnauthorizedException({
                message: (0, errors_1.OFFER_ERROR)(constants_1.LANGUAGE.RU),
            });
        }
        const offer = await this.offersRepasitory.create({
            ...dto,
            user: userId,
            itemId: itemId,
            name: user.username,
        });
        this.wishesService.toRaise(dto.amount, itemId);
        return offer;
    }
    async getAllOffers() {
        const offers = await this.offersRepasitory.findAll();
        return offers;
    }
    async getOfferByPK(id) {
        const offer = await (0, utility_1.FIND_PK)(this.offersRepasitory, id);
        return offer;
    }
};
exports.OffersService = OffersService;
exports.OffersService = OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(offers_model_1.Offers)),
    __metadata("design:paramtypes", [Object, user_service_1.UserService,
        wish_service_1.WishService])
], OffersService);
//# sourceMappingURL=offers.service.js.map