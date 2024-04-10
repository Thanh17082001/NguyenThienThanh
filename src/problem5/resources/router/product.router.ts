import { createProduct, getAll, updateProductById, deleteProduct, filtersProduct } from "../controller/product.controller";

import express,{Router} from 'express'

const router: Router = express.Router()

router.post('/create', createProduct)
router.patch('/update', updateProductById)
router.delete("/delete", deleteProduct);
router.get("/filter", filtersProduct);
router.get("/", getAll);

export default router;