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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const createUser_dto_1 = require("./userDto/createUser.dto");
const utility_1 = require("../helpers/utility");
const validation_pipe_1 = require("../helpers/validation.pipe");
const jwtAuth_guard_1 = require("../auth/jwtAuth.guard");
const findUser_dro_1 = require("./userDto/findUser.dro");
const validationExeptionFilter_1 = require("../helpers/validationExeptionFilter");
const updateUser_dto_1 = require("./userDto/updateUser.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(userDto) {
        console.log(userDto);
        return this.userService.createUser(userDto);
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    getOwnUser(req) {
        return req.user;
    }
    getOwnWishes(req) {
        const userId = req.user.id;
        return this.userService.getUserWishes(userId);
    }
    getUserByName(username) {
        return this.userService.getUserByUsername(username);
    }
    async getWishesByUsername(username) {
        const user = await this.userService.getUserByUsername(username);
        if (!user) {
            throw new common_1.UnauthorizedException({ messege: 'User not Found' });
        }
        return user.wishes;
    }
    async findUser(payload) {
        console.log(payload);
        let user = await this.userService.getUserByUsername(payload.query);
        console.log(user);
        if (!user) {
            console.log(`Trying to find by email: ${payload.query}`);
            user = await this.userService.getUserByEmail(payload.query);
            if (!user) {
                throw new common_1.UnauthorizedException({ message: 'User not found' });
            }
        }
        return (0, utility_1.FOREIGN_USER_SCHEMA)(user);
    }
    updateUser(userDto, req) {
        const user = this.userService.updateUser((0, utility_1.REQUEST_ID)(req), userDto);
        return user;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseFilters)(new validationExeptionFilter_1.ValidationExceptionFilter()),
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOwnUser", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/me/wishes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOwnWishes", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserByName", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':username/wishes'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getWishesByUsername", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/find'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findUser_dro_1.FindUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUser", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUser_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map