"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String,
        }
    },
    phone: String,
    website: String,
    company: {
        name: String
    }
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
