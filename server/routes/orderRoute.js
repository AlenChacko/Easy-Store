import express from "express"
import { admin, protect } from "../middlewares/authMiddleware.js"

import {
  addOrderItems, getOrderById, getUserOrders,getOrders, updateOrderToDelivered
} from "../controllers/orderController.js"
const router = express.Router()

router.route("/").post(protect, addOrderItems).get(protect,admin, getOrders)
router.route("/user-orders").get(protect, getUserOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/deliver/:id").patch(protect, admin, updateOrderToDelivered)


export default router