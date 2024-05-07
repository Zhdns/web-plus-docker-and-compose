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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const wishlists_model_1 = require("./wishlists.model");
const wishlistWishes_model_1 = require("../wishlistsWishes/wishlistWishes.model");
const wishes_model_1 = require("../wishes/wishes.model");
const user_model_1 = require("../user/user.model");
let WishlistsService = class WishlistsService {
    constructor(wishlistsRepository, wishlistWishesRepository) {
        this.wishlistsRepository = wishlistsRepository;
        this.wishlistWishesRepository = wishlistWishesRepository;
    }
    async createWishlist(dto, userid) {
        const wishlist = await this.wishlistsRepository.create({
            ...dto,
            ownerId: userid,
        });
        if (dto.itemsId && dto.itemsId.length > 0) {
            const wishlistWishesPromises = dto.itemsId.map((wishId) => {
                return this.wishlistWishesRepository.create({
                    wishlistId: wishlist.id,
                    wishId: wishId,
                });
            });
            await Promise.all(wishlistWishesPromises);
        }
        return wishlist;
    }
    async getWishlists() {
        const wishlists = await this.wishlistsRepository.findAll({
            limit: 10,
            include: [
                {
                    model: wishes_model_1.Wishes,
                },
            ],
        });
        if (!wishlists) {
            throw new common_1.UnauthorizedException({ messege: 'NO WISHlists' });
        }
        return wishlists;
    }
    async getWishlistById(id) {
        const wishlist = await this.wishlistsRepository.findByPk(id, {
            include: [
                {
                    model: user_model_1.User,
                },
                {
                    model: wishes_model_1.Wishes,
                },
            ],
        });
        return wishlist;
    }
};
exports.WishlistsService = WishlistsService;
exports.WishlistsService = WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(wishlists_model_1.Wishlists)),
    __param(1, (0, sequelize_1.InjectModel)(wishlistWishes_model_1.WishlistWishes)),
    __metadata("design:paramtypes", [Object, Object])
], WishlistsService);
//# sourceMappingURL=wishlists.service.js.map