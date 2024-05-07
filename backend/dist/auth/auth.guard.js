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
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../helpers/constants");
const errors_1 = require("../helpers/errors");
let JwtGuard = class JwtGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const auth = req.headers.authorization;
            const bearer = auth.split(' ')[0];
            const token = auth.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException({ messege: (0, errors_1.AUTH_ERROR)(constants_1.LANGUAGE.RU) });
            }
            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        }
        catch {
            throw new common_1.UnauthorizedException({ messege: (0, errors_1.AUTH_ERROR)(constants_1.LANGUAGE.RU) });
        }
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtGuard);
//# sourceMappingURL=auth.guard.js.map