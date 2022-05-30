import express from 'express';
const router = express.Router();

import{ logIn, register, getAllUsers} from '../controllers/userController'
import {isAdmin} from '../middleware/isAdmin'


router
.get('/get-users', isAdmin, getAllUsers)
.post("/sign-user",logIn)
.post("/reg-user",register)


export default router;