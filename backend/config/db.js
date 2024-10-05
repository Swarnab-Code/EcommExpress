import mongoose from "mongoose"

export const connectDB = async() => {
	await mongoose.connect('mongodb+srv://EcommExpress:Ecommexpress2024@cluster0.9ry20.mongodb.net/EcommExpress').then(() => console.log("DB Connected"))
}