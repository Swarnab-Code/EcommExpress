import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({})
	const url = "http://localhost:4000"
	const [token, setToken] = useState("")
	const [all_products, setAll_products] = useState([])

	const addToCart = (itemId) => {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({...prev, [itemId] : 1}))
		} else {
			setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
		}
	}
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
	}
	// get total cart amount
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = all_products.find((product) => product._id === item);
				totalAmount += itemInfo.price * cartItems[item];
			}
		}
		return totalAmount;
	}

	const fetchProductList = async () => {
		const response = await axios.get(url + "/api/product/list")
		setAll_products(response.data.data)
	}

	useEffect(() => {
		async function loadData() {
			await fetchProductList()

			const token = localStorage.getItem("token");
			if (token) {
				setToken(token)
			}
		}
		loadData()
	}, []);

	const contextvalue = {
		all_products, 
		cartItems, 
		setCartItems, 
		addToCart, 
		removeFromCart,
		getTotalCartAmount,
		url,
		token,
		setToken
	}
	return (
		<ShopContext.Provider value={contextvalue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider
