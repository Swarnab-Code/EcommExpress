import express from "express"
import authMiddleware from './../middleware/auth.js';
import { placeOrder } from "../controller/orderController.js";

const orderRouter = express.Router()

orderRouter.post("/place", authMiddleware, placeOrder)

export default orderRouter