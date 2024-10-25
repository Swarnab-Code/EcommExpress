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

		const line_item = req.body.items.map((item) => ({
			price_data: {
				currency: "inr",
				product_data: {
					name: item.name
				},
				unit_amount: item.price * 100 * 84,
			},
			quantity: item.quantity,
		}))
		line_item.push({
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
			line_items: line_item,
			mode: "payment",
			success_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
			cancel_url: "http://localhost:3000/cancel",
		})
		res.json({success: true, session_url: session.url})
	} catch (error) {
		console.log(error)
		res.json({success: false, message: "Something went wrong"})
	}
}

export { placeOrder }