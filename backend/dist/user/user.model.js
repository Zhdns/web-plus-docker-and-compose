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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const offers_model_1 = require("../offers/offers.model");
const constants_1 = require("../helpers/constants");
const errors_1 = require("../helpers/errors");
const wishes_model_1 = require("../wishes/wishes.model");
const validator_1 = require("validator");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: (0, errors_1.LENGTH_VALIDATION_ERROR)(2, 30, constants_1.LANGUAGE.RU),
            },
        },
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: constants_1.DEFAULT_VALUE.ABOUT,
        validate: {
            len: {
                args: [2, 200],
                msg: (0, errors_1.LENGTH_VALIDATION_ERROR)(2, 200, constants_1.LANGUAGE.RU),
            },
            string(value) {
                if (typeof value !== 'string') {
                    throw new Error((0, errors_1.STRING_VALDATION_ERROR)(constants_1.LANGUAGE.RU));
                }
            },
        },
    }),
    __metadata("design:type", String)
], User.prototype, "about", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: constants_1.DEFAULT_VALUE.AVATAR,
        validate: {
            url(value) {
                if (!(0, validator_1.isURL)(value)) {
                    throw new Error((0, errors_1.URL_VALIDATION_ERROR)(constants_1.LANGUAGE.RU));
                }
            },
        },
    }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            email(value) {
                if (!(0, validator_1.isEmail)(value)) {
                    throw new Error((0, errors_1.EMAIL_VALIDATION_ERROR)(constants_1.LANGUAGE.RU));
                }
            },
        },
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => wishes_model_1.Wishes),
    __metadata("design:type", Array)
], User.prototype, "wishes", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => offers_model_1.Offers),
    __metadata("design:type", Array)
], User.prototype, "offers", void 0);
exports.User = User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'users' })
], User);
//# sourceMappingURL=user.model.js.map