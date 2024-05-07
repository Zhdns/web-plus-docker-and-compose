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
exports.WishController = void 0;
const common_1 = require("@nestjs/common");
const wish_service_1 = require("./wish.service");
const createWish_dto_1 = require("./wishesDto/createWish.dto");
const jwtAuth_guard_1 = require("../auth/jwtAuth.guard");
let WishController = class WishController {
    constructor(wishService) {
        this.wishService = wishService;
    }
    create(wishesDto, req) {
        const userId = req.user.id;
        return this.wishService.createWish(wishesDto, userId);
    }
    getLatTen() {
        return this.wishService.getLastTen();
    }
    getTopTen() {
        return this.wishService.getPopularGift();
    }
    getOwnWish(id) {
        return this.wishService.getWishById(id);
    }
    async copyWish(id, req) {
        console.log(id);
        const wishCopy = await this.wishService.toCopy(id);
        const userId = req.user.id;
        const newWish = await this.wishService.createWish(wishCopy, userId);
        console.log(newWish);
        return newWish;
    }
    async dleteWish(id, req) {
        const wish = await this.wishService.getWishById(id);
        if (wish.userId !== req.user.id) {
            throw new common_1.UnauthorizedException({ message: 'Wish not found' });
        }
        return await this.wishService.deleteWishById(id);
    }
};
exports.WishController = WishController;
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWish_dto_1.CreateWishDto, Object]),
    __metadata("design:returntype", void 0)
], WishController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishController.prototype, "getLatTen", null);
__decorate([
    (0, common_1.Get)('/top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishController.prototype, "getTopTen", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WishController.prototype, "getOwnWish", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/copy'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "copyWish", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "dleteWish", null);
exports.WishController = WishController = __decorate([
    (0, common_1.Controller)('/wishes'),
    __metadata("design:paramtypes", [wish_service_1.WishService])
], WishController);
//# sourceMappingURL=wish.controller.js.map