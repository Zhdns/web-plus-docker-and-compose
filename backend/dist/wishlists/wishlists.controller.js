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
exports.WishlistsController = void 0;
const common_1 = require("@nestjs/common");
const wishlists_service_1 = require("./wishlists.service");
const wishlists_dto_1 = require("./wishlistsDto/wishlists.dto");
const jwtAuth_guard_1 = require("../auth/jwtAuth.guard");
let WishlistsController = class WishlistsController {
    constructor(wishlistsService) {
        this.wishlistsService = wishlistsService;
    }
    create(wishlistsDto, req) {
        console.log(wishlistsDto);
        const userId = req.user.id;
        return this.wishlistsService.createWishlist(wishlistsDto, userId);
    }
    getWishlists() {
        return this.wishlistsService.getWishlists();
    }
    async getWishesByUsername(id) {
        const wishlist = await this.wishlistsService.getWishlistById(id);
        if (!wishlist) {
            throw new common_1.UnauthorizedException({ messege: 'User not Found' });
        }
        return wishlist;
    }
};
exports.WishlistsController = WishlistsController;
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wishlists_dto_1.CreateWishlistsDto, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "getWishlists", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "getWishesByUsername", null);
exports.WishlistsController = WishlistsController = __decorate([
    (0, common_1.Controller)('/wishlistlists'),
    __metadata("design:paramtypes", [wishlists_service_1.WishlistsService])
], WishlistsController);
//# sourceMappingURL=wishlists.controller.js.map