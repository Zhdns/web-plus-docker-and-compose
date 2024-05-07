"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_TYPEOF = exports.ISTYPE = void 0;
var ISTYPE;
(function (ISTYPE) {
    ISTYPE["STR"] = "string";
    ISTYPE["NUM"] = "number";
    ISTYPE["BOO"] = "boolean";
})(ISTYPE || (exports.ISTYPE = ISTYPE = {}));
const IS_TYPEOF = (value, type, error) => {
    if (typeof value !== type) {
        throw new Error(error);
    }
    return true;
};
exports.IS_TYPEOF = IS_TYPEOF;
//# sourceMappingURL=typeOfChecker.js.map