import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDescription from "../components/ProductDescription";
import ProductHD from "./ProductHD";
import ProductMD from "./ProductMD";

const Product = () => {
	const { all_products } = useContext(ShopContext);
	const { productId } = useParams();
	console.log("ProductId: ", productId);

	const product = all_products.find((product) => product._id === productId);
	if (!product) {
		return <div className="h1 pt-28">Product Not Found</div>;
		// or redirect the user to a 404 page
	}

	return (
		<section className="max-padd-container py-20">
			<div>
				<ProductHD product={product} />
				<ProductMD product={product} />
				<ProductDescription />
			</div>
		</section>
	);
};

export default Product;
