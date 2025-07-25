import { Router } from "express";

const router = Router();

import {
    getAllProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
} from "../controllers/products.controller.js";

import { auth } from "../../src/middlewares/auth.middleware.js";

router.get('/products', getAllProducts);

router.get('/products/:id', auth, getProductById);

router.post('/products', postProduct);

router.put('/products/:id', putProduct);

router.delete('/products/:id', deleteProduct);

export default router;