"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OFFER_ERROR = exports.WISH_BELONGING_ERROR = exports.USER_EXIST_ERROR = exports.RAISED_ERROR = exports.ACCESS_ERROR = exports.SIGNIN_ERROR = exports.AUTH_ERROR = exports.NUMBER_VALDATION_ERROR = exports.STRING_VALDATION_ERROR = exports.URL_VALIDATION_ERROR = exports.EMAIL_VALIDATION_ERROR = exports.LENGTH_VALIDATION_ERROR = void 0;
const constants_1 = require("./constants");
const LENGTH_VALIDATION_ERROR = (min, max, lang) => {
    const errorRu = `Не короче ${min}, и не длиннее ${max}`;
    const errorEng = `Not shorter than ${min}, and not longer than ${max}`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.LENGTH_VALIDATION_ERROR = LENGTH_VALIDATION_ERROR;
const EMAIL_VALIDATION_ERROR = (lang) => {
    const errorRu = `Не валидный Email`;
    const errorEng = `Email is not valid`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.EMAIL_VALIDATION_ERROR = EMAIL_VALIDATION_ERROR;
const URL_VALIDATION_ERROR = (lang) => {
    const errorRu = `Не валидный URL адрес`;
    const errorEng = `URL is not valid`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.URL_VALIDATION_ERROR = URL_VALIDATION_ERROR;
const STRING_VALDATION_ERROR = (lang) => {
    const errorRu = `Не строка`;
    const errorEng = `Not a string`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.STRING_VALDATION_ERROR = STRING_VALDATION_ERROR;
const NUMBER_VALDATION_ERROR = (lang) => {
    const errorRu = `Не число`;
    const errorEng = `Not a number`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.NUMBER_VALDATION_ERROR = NUMBER_VALDATION_ERROR;
const AUTH_ERROR = (lang) => {
    const errorRu = `Токен не действителен`;
    const errorEng = `Token is not valid`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.AUTH_ERROR = AUTH_ERROR;
const SIGNIN_ERROR = (lang) => {
    const errorRu = `Логин или пароль неверны`;
    const errorEng = `Username or password is mot correct`;
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.SIGNIN_ERROR = SIGNIN_ERROR;
const ACCESS_ERROR = (lang) => {
    const errorEng = 'Access is denied';
    const errorRu = 'Доступ запрещен';
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.ACCESS_ERROR = ACCESS_ERROR;
const RAISED_ERROR = (lang) => {
    const errorEng = 'The fundraising has already started';
    const errorRu = 'Сбор средств уже начался';
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.RAISED_ERROR = RAISED_ERROR;
const USER_EXIST_ERROR = (lang) => {
    const errorEng = 'Username or Email heve already used';
    const errorRu = 'Такой юзернейи или почта уже использкется';
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.USER_EXIST_ERROR = USER_EXIST_ERROR;
const WISH_BELONGING_ERROR = (lang) => {
    const errorEng = 'This wish is belong for curent user';
    const errorRu = 'Нельзя поддерживать свои подарки';
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.WISH_BELONGING_ERROR = WISH_BELONGING_ERROR;
const OFFER_ERROR = (lang) => {
    const errorEng = 'Offer is more them rest of the price';
    const errorRu = 'Предложение выше, чем остаток цены';
    if (lang === constants_1.LANGUAGE.RU) {
        return errorRu;
    }
    return errorEng;
};
exports.OFFER_ERROR = OFFER_ERROR;
//# sourceMappingURL=errors.js.map