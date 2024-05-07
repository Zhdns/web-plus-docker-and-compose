"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIND_PK = exports.FIND_ONE = exports.REQUEST_ID = exports.FOREIGN_USER_SCHEMA_WITH_WISHES = exports.FOREIGN_USER_SCHEMA = void 0;
const FOREIGN_USER_SCHEMA = (user) => {
    return {
        id: user.id,
        username: user.username,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.createdAt,
    };
};
exports.FOREIGN_USER_SCHEMA = FOREIGN_USER_SCHEMA;
const FOREIGN_USER_SCHEMA_WITH_WISHES = (user) => {
    return {
        id: user.id,
        username: user.username,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
        wishes: user.wishes,
        createdAt: user.createdAt,
        updatedAt: user.createdAt,
    };
};
exports.FOREIGN_USER_SCHEMA_WITH_WISHES = FOREIGN_USER_SCHEMA_WITH_WISHES;
const REQUEST_ID = (req) => {
    return req.user.id;
};
exports.REQUEST_ID = REQUEST_ID;
const FIND_ONE = async (repository, identification, modelOne, modelTwo) => {
    const include = [];
    if (modelOne) {
        include.push({ model: modelOne });
    }
    if (modelTwo) {
        include.push({ model: modelTwo });
    }
    return await repository.findOne({
        where: identification,
        include: include.length > 0 ? include : undefined
    });
};
exports.FIND_ONE = FIND_ONE;
const FIND_PK = async (repository, identification, modelOne, modelTwo) => {
    const include = [];
    if (modelOne) {
        include.push({ model: modelOne });
    }
    if (modelTwo) {
        include.push({ model: modelTwo });
    }
    return await repository.findByPk(identification, {
        include: include.length > 0 ? include : undefined
    });
};
exports.FIND_PK = FIND_PK;
//# sourceMappingURL=utility.js.map