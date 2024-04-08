import { createProduct } from "../controller/product.controller";

import express,{Router} from 'express'

const router: Router = express.Router()

router.post('/create', createProduct)

export default router;