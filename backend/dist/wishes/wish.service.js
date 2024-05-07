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
exports.WishService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const wishes_model_1 = require("./wishes.model");
const user_service_1 = require("../user/user.service");
const user_model_1 = require("../user/user.model");
const offers_model_1 = require("../offers/offers.model");
const utility_1 = require("../helpers/utility");
const errors_1 = require("../helpers/errors");
const constants_1 = require("../helpers/constants");
let WishService = class WishService {
    constructor(userService, wishesRepository) {
        this.userService = userService;
        this.wishesRepository = wishesRepository;
    }
    async createWish(dto, userId) {
        const user = await this.userService.getUserByPK(userId);
        if (!user) {
            throw new common_1.UnauthorizedException({ message: 'User not found' });
        }
        const wish = await this.wishesRepository.create({
            ...dto,
            userId: userId,
        });
        return wish;
    }
    async getLastTen() {
        const wishes = await this.wishesRepository.findAll({
            limit: 40,
            order: [['createdAt', 'DESC']],
        });
        if (!wishes) {
            throw new common_1.UnauthorizedException({ messege: 'NO WISHES' });
        }
        return wishes;
    }
    async getPopularGift() {
        const wishes = await this.wishesRepository.findAll({
            limit: 10,
            order: [['copied', 'DESC']],
        });
        if (!wishes) {
            throw new common_1.UnauthorizedException({ messege: 'NO WISHES' });
        }
        return wishes;
    }
    async getWishById(wishId) {
        const wish = await this.wishesRepository.findByPk(wishId, {
            include: [{ model: user_model_1.User }, { model: offers_model_1.Offers }],
        });
        if (!wish) {
            throw new common_1.UnauthorizedException({ messege: 'Wish is not found' });
        }
        return wish;
    }
    async toRaise(raised, wishId) {
        const wish = await this.getWishById(wishId);
        const newRaised = wish.raised + raised;
        await this.wishesRepository.update({ raised: newRaised }, {
            where: { id: wishId },
        });
        return this.getWishById(wishId);
    }
    async toCopy(wishId) {
        const wish = await this.getWishById(wishId);
        const newCopyNumber = wish.copied + 1;
        await this.wishesRepository.update({ copied: newCopyNumber }, {
            where: { id: wishId },
        });
        return {
            name: wish.name,
            link: wish.link,
            image: wish.image,
            description: wish.description,
            price: wish.price,
        };
    }
    async deleteWishById(wishId) {
        const wish = await this.getWishById(wishId);
        if (!wish) {
            throw new common_1.UnauthorizedException({ message: 'Wish is not found' });
        }
        wish.destroy();
        return { message: 'Wish deleted successfully' };
    }
    async updateWish(wishId, newWish, userId) {
        const wish = await (0, utility_1.FIND_PK)(this.wishesRepository, wishId);
        if (wish.userId !== userId) {
            throw new common_1.HttpException((0, errors_1.ACCESS_ERROR)(constants_1.LANGUAGE.RU), common_1.HttpStatus.FORBIDDEN);
        }
        if (wish.raised > 0) {
            throw new common_1.HttpException((0, errors_1.RAISED_ERROR)(constants_1.LANGUAGE.RU), common_1.HttpStatus.FORBIDDEN);
        }
        Object.assign(wish, newWish);
        await wish.save();
        return wish;
    }
};
exports.WishService = WishService;
exports.WishService = WishService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(wishes_model_1.Wishes)),
    __metadata("design:paramtypes", [user_service_1.UserService, Object])
], WishService);
//# sourceMappingURL=wish.service.js.map