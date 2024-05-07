"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validaion_exception_1 = require("./validaion.exception");
let ValidationPipe = class ValidationPipe {
    async transform(value, metadata) {
        if (!metadata.metatype || !this.toValidate(metadata.type)) {
            return value;
        }
        const object = (0, class_transformer_1.plainToClass)(metadata.metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            console.log(errors);
            let messages = errors.map((err) => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
            });
            throw new validaion_exception_1.ValidationException(messages);
        }
        return object;
    }
    toValidate(type) {
        const noValidationNeeded = ['custom', 'query', 'param', 'header'];
        return !noValidationNeeded.includes(type);
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = __decorate([
    (0, common_1.Injectable)()
], ValidationPipe);
//# sourceMappingURL=validation.pipe.js.map