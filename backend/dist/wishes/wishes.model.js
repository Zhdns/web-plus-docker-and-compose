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
exports.Wishes = void 0;
const class_validator_1 = require("class-validator");
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../helpers/constants");
const errors_1 = require("../helpers/errors");
const offers_model_1 = require("../offers/offers.model");
const user_model_1 = require("../user/user.model");
const wishlists_model_1 = require("../wishlists/wishlists.model");
const wishlistWishes_model_1 = require("../wishlistsWishes/wishlistWishes.model");
let Wishes = class Wishes extends sequelize_typescript_1.Model {
};
exports.Wishes = Wishes;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Wishes.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
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
], Wishes.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            url(value) {
                if (!(0, class_validator_1.isURL)(value)) {
                    throw new Error((0, errors_1.URL_VALIDATION_ERROR)(constants_1.LANGUAGE.RU));
                }
            },
        },
    }),
    __metadata("design:type", String)
], Wishes.prototype, "link", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            url(value) {
                if (!(0, class_validator_1.isURL)(value)) {
                    throw new Error((0, errors_1.URL_VALIDATION_ERROR)(constants_1.LANGUAGE.RU));
                }
            },
        },
    }),
    __metadata("design:type", String)
], Wishes.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(1024),
        allowNull: false,
        validate: {
            len: {
                args: [2, 1024],
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
], Wishes.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            num(value) {
                if (typeof value !== 'number') {
                    throw new Error((0, errors_1.NUMBER_VALDATION_ERROR)(constants_1.LANGUAGE.RU));
                }
            },
        },
    }),
    __metadata("design:type", Number)
], Wishes.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Wishes.prototype, "raised", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Wishes.prototype, "copied", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Wishes.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Wishes.prototype, "owner", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => offers_model_1.Offers),
    __metadata("design:type", Array)
], Wishes.prototype, "offers", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => wishlists_model_1.Wishlists, () => wishlistWishes_model_1.WishlistWishes),
    __metadata("design:type", Array)
], Wishes.prototype, "wishlist", void 0);
exports.Wishes = Wishes = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'wishes' })
], Wishes);
//# sourceMappingURL=wishes.model.js.map