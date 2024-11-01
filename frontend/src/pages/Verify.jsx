import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Verify = () => {
	const [serachParams, setSerachParams] = useSearchParams()
	const success = serachParams.get('success')
	const orderId = serachParams.get('orderId')

	// console.log(success, orderId)
	const {url} = useContext(ShopContext)
	const navigate = useNavigate()

	const verifyPayment = async () => {
		const response = await axios.post(url + "/api/order/verify", {success, orderId})
		if (response.data.success) {
			navigate("/myorders")
		} else {
			navigate("/")
		}
	}

	useEffect(() => {
		verifyPayment()
	}, [])

	return (
		<section>
			<div className='min-h-[60vhv] grid'>
				<div className='w-24 h-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'></div>
			</div>
		</section>
	)
}

export default Verify
