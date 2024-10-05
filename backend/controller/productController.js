import productModel from "../models/productModel.js"
import fs from "fs"

// add product item
const addProduct = async (req, res) => {
	let image_filename = `${req.file.filename}`

	const product = new productModel({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		image: image_filename,
		category: req.body.category
	})

	try {
		await product.save();
		res.json({ success: true, message: "Product Added" })
	} catch (error) {
		console.log(error)
		res.json({ success: false, message: "Product Not Added" })
	}
}

// all product list
const listProduct = async(req, res) => {
	try {
		const products = await productModel.find({});
		res.json({ success: true, data: products })
	} catch (error) {
		console.log(error)
		res.json({ success: false, message: "Product Not Found" })
	}
}

// remove product
const removeProduct = async(req, res) => {
	try {
		const product = await productModel.findById(req.body.id)
		fs.unlink(`upload/${product.image}`, () => {})

		await productModel.findByIdAndDelete(req.body.id)
		res.json({ success: true, message: "Products Removed"})
	} catch (error) {
		console.log(error)
		res.json({ success: false, message: "Product Not Removed"})
	}
}

export { addProduct, listProduct, removeProduct }