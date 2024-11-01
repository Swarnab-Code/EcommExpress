import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = "http://localhost:5173"

// placing user order for frontend
const placeOrder = async (req, res) => {
	try {
		const newOrder = new orderModel({
			userId: req.body.userId,
			items: req.body.items,
			amount: req.body.amount,
			address: req.body.address
		})

		await newOrder.save()
		await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}})

		const line_items = req.body.items.map((item) => ({
			price_data: {
				currency: "inr",
				product_data: {
					name: item.name
				},
				unit_amount: item.price * 100 * 84,
			},
			quantity: item.quantity,
		}))
		line_items.push({
			price_data: {
				currency: "inr",
				product_data: {
					name: "Shipping"
				},
				unit_amount: 2 * 100 * 84,
			},
			quantity: 1,
		})

		const session = await stripe.checkout.sessions.create({
			line_items: line_items,
			mode: "payment",
			success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
			cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
		})
		res.json({success: true, session_url: session.url})
	} catch (error) {
		console.log(error)
		res.json({success: false, message: "Something went wrong"})
	}
}

// verify user order
const verifyOrder = async (req, res) => {
	const {success, orderId} = req.body
	try {
		if (success === "true") {
			await orderModel.findByIdAndUpdate(orderId, {status: "Paid"})
			res.json({success: true, message: "Payment Successful"})
		} else {
			res.json({success: false, message: "Payment Failed"})
		}
	} catch (error) {
		console.log(error)
		res.json({success: false, message: "Something went wrong"})
	}
}

// get user orders for frontend
const userOrders = async (req, res) => {
	try {
		const orders = await orderModel.find({userId: req.body.userId})
		res.json({success: true, orders})
	} catch (error) {
		console.log(error)
		res.json({success: false, message: "Something went wrong"})
	}
}

export { placeOrder, verifyOrder, userOrders }