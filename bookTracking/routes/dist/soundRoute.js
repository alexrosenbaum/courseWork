"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var bookController_1 = require("../controllers/bookController");
router
    .post("/upload-sound", bookController_1.upload)
    .get("/search", bookController_1.search);
exports["default"] = router;
