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
exports.Offers = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../helpers/constants");
const errors_1 = require("../helpers/errors");
const user_model_1 = require("../user/user.model");
const wishes_model_1 = require("../wishes/wishes.model");
let Offers = class Offers extends sequelize_typescript_1.Model {
};
exports.Offers = Offers;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Offers.prototype, "id", void 0);
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
], Offers.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
    }),
    __metadata("design:type", Boolean)
], Offers.prototype, "hidden", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Offers.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => wishes_model_1.Wishes),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Offers.prototype, "itemId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Offers.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Offers.prototype, "owner", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => wishes_model_1.Wishes),
    __metadata("design:type", wishes_model_1.Wishes)
], Offers.prototype, "item", void 0);
exports.Offers = Offers = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'offers' })
], Offers);
//# sourceMappingURL=offers.model.js.map