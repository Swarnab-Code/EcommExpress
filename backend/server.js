import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express()
const port = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

// DB Connections
connectDB()

// api endpoints
app.use("/api/product", productRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/',(req, res) => {
	res.send("API IS WORKING")
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})