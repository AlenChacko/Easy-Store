import express from 'express'
import { admin, protect } from '../middlewares/authMiddleware.js'
import { getProductbyId, getProducts } from '../controllers/productController.js'
const router = express.Router()


router.route("/").get(getProducts)
router.route("/:id").get(getProductbyId)

export default router