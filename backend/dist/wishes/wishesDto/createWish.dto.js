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
exports.CreateWishDto = void 0;
const class_validator_1 = require("class-validator");
const constants_1 = require("../../helpers/constants");
const errors_1 = require("../../helpers/errors");
class CreateWishDto {
}
exports.CreateWishDto = CreateWishDto;
__decorate([
    (0, class_validator_1.Length)(1, 250, { message: (0, errors_1.LENGTH_VALIDATION_ERROR)(1, 250, constants_1.LANGUAGE.RU) }),
    __metadata("design:type", String)
], CreateWishDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: (0, errors_1.STRING_VALDATION_ERROR)(constants_1.LANGUAGE.RU) }),
    (0, class_validator_1.IsUrl)({}, { message: (0, errors_1.URL_VALIDATION_ERROR)(constants_1.LANGUAGE.RU) }),
    __metadata("design:type", String)
], CreateWishDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({}, { message: (0, errors_1.URL_VALIDATION_ERROR)(constants_1.LANGUAGE.RU) }),
    __metadata("design:type", String)
], CreateWishDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.Length)(1, 1024, { message: (0, errors_1.LENGTH_VALIDATION_ERROR)(1, 1024, constants_1.LANGUAGE.RU) }),
    __metadata("design:type", String)
], CreateWishDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, errors_1.NUMBER_VALDATION_ERROR)(constants_1.LANGUAGE.RU) }),
    __metadata("design:type", Number)
], CreateWishDto.prototype, "price", void 0);
//# sourceMappingURL=createWish.dto.js.map