import express from 'express'
import { getProductById, getProducts } from '../controllers/productController.js'
const productRouter = express.Router()

productRouter.get('/products',getProducts)
productRouter.get('/product/:id',getProductById)

export default productRouter