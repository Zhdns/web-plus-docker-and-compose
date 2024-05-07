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
exports.Wishlists = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../helpers/constants");
const errors_1 = require("../helpers/errors");
const user_model_1 = require("../user/user.model");
const wishes_model_1 = require("../wishes/wishes.model");
const wishlistWishes_model_1 = require("../wishlistsWishes/wishlistWishes.model");
let Wishlists = class Wishlists extends sequelize_typescript_1.Model {
};
exports.Wishlists = Wishlists;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    }),
    __metadata("design:type", Number)
], Wishlists.prototype, "id", void 0);
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
], Wishlists.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 200],
                msg: (0, errors_1.LENGTH_VALIDATION_ERROR)(2, 200, constants_1.LANGUAGE.RU),
            },
        },
    }),
    __metadata("design:type", String)
], Wishlists.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    __metadata("design:type", Number)
], Wishlists.prototype, "ownerId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => wishes_model_1.Wishes, () => wishlistWishes_model_1.WishlistWishes),
    __metadata("design:type", Array)
], Wishlists.prototype, "items", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Wishlists.prototype, "owner", void 0);
exports.Wishlists = Wishlists = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'wishlists' })
], Wishlists);
//# sourceMappingURL=wishlists.model.js.map