"use strict";
exports.__esModule = true;
exports.genres = exports.searches = exports.book = void 0;
var mongoose_1 = require("mongoose");
var BookSchema = new mongoose_1["default"].Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: String
    },
    genre: {
        type: String
    },
    description: {
        type: String
    },
    duration: {
        type: Number
    },
    page: {
        type: Number
    }
});
exports.book = mongoose_1["default"].model('book', BookSchema);
exports.searches = mongoose_1["default"].model('searches', BookSchema);
exports.genres = mongoose_1["default"].model('genres', BookSchema);
