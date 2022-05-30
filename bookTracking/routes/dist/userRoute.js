"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userController_1 = require("../controllers/userController");
var isAdmin_1 = require("../middleware/isAdmin");
router
    .get('/get-users', isAdmin_1.isAdmin, userController_1.getAllUsers)
    .post("/sign-user", userController_1.logIn)
    .post("/reg-user", userController_1.register);
exports["default"] = router;
