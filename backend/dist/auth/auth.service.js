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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcryptjs");
const loginUser_dto_1 = require("../user/userDto/loginUser.dto");
const errors_1 = require("../helpers/errors");
const constants_1 = require("../helpers/constants");
const jwtAuth_guard_1 = require("./jwtAuth.guard");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    generateToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
            userName: user.username,
            about: user.about,
            avatar: user.avatar,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async validation(userDto) {
        const user = await this.userService.getUserByUsername(userDto.username);
        console.log(user);
        if (!user) {
            throw new common_1.HttpException((0, errors_1.SIGNIN_ERROR)(constants_1.LANGUAGE.RU), common_1.HttpStatus.NOT_FOUND);
        }
        const hashPass = await bcrypt.compare(userDto.password, user.password);
        console.log(hashPass);
        if (user && hashPass) {
            return user;
        }
        throw new common_1.HttpException((0, errors_1.SIGNIN_ERROR)(constants_1.LANGUAGE.RU), common_1.HttpStatus.NOT_FOUND);
    }
    async signUp(userDto) {
        const candidate = await this.userService.getUserByUsername(userDto.username);
        if (candidate) {
            console.log(`User :  ${userDto} `);
            throw new common_1.HttpException((0, errors_1.USER_EXIST_ERROR)(constants_1.LANGUAGE.RU), common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPass = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({
            ...userDto,
            password: hashPass,
        });
        const access_token = await this.generateToken(user);
        console.log({
            name: user.username,
            email: user.email,
            about: user.about,
            avatar: user.avatar,
            access_token,
        });
        return {
            name: user.username,
            email: user.email,
            about: user.about,
            avatar: user.avatar,
            access_token,
        };
    }
    async singIn(userDto) {
        console.log(userDto);
        const user = await this.validation(userDto);
        return this.generateToken(user);
    }
};
exports.AuthService = AuthService;
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUser_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "singIn", null);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map