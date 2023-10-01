"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
var mongoose_1 = require("mongoose");
var TodoSchema = new mongoose_1.Schema({
    id: { type: Number, required: true, unique: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    name: { type: String },
    completed: { type: Boolean, default: false }
});
exports.TodoModel = (0, mongoose_1.model)("Todo", TodoSchema);
