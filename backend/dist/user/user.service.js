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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./user.model");
const wishes_model_1 = require("../wishes/wishes.model");
const utility_1 = require("../helpers/utility");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users;
    }
    async getUserByUsername(username) {
        const user = (0, utility_1.FIND_ONE)(this.userRepository, { username }, wishes_model_1.Wishes);
        return user;
    }
    async getUserByEmail(email) {
        const user = (0, utility_1.FIND_ONE)(this.userRepository, { email }, wishes_model_1.Wishes);
        return user;
    }
    async getUserByPK(id) {
        const user = await (0, utility_1.FIND_PK)(this.userRepository, id);
        console.log(`payload: ${id}, user: ${user}`);
        return user;
    }
    async getUserWishes(userId) {
        const user = await (0, utility_1.FIND_PK)(this.userRepository, userId, wishes_model_1.Wishes);
        if (!user) {
            throw new common_1.UnauthorizedException({ message: 'User not found' });
        }
        return user.wishes;
    }
    async updateUser(userId, userDto) {
        const user = await (0, utility_1.FIND_PK)(this.userRepository, userId);
        Object.assign(user, userDto);
        await user.save();
        return user;
    }
    async deleteUserById(userId) {
        const user = this.getUserByPK(userId);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        }
        (await user).destroy();
        return { message: 'User deleted successfully' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map