import express from 'express';
const router = express.Router();

import { upload, search, genre} from '../controllers/bookController'


router
.post("/upload-book", upload )
.get("/search",search)
.get("/genres", genre )

export default router