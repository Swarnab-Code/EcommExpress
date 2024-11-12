import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { LuMoveUpRight } from "react-icons/lu";

const ProductMD = (props) => {
	const { product } = props;
	const { addToCart, removeFromCart, cartItems, url } =
		useContext(ShopContext);
	const navigate = useNavigate();

	return (
		<selection className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
			{/* left side */}
			<div className="flex gap-x-2 xl:flex-1 py-5">
				<div className="flexCenter flex-col gap-[7px] flex-wrap">
					<img
						src={url + "/images/" + product.image}
						alt="productImg"
						className="max-h-[89px] rounded-lg bg-gray-10"
					/>
					<img
						src={url + "/images/" + product.image}
						alt="productImg"
						className="max-h-[89px] rounded-lg bg-gray-10"
					/>
					<img
						src={url + "/images/" + product.image}
						alt="productImg"
						className="max-h-[89px] rounded-lg bg-gray-10"
					/>
					<img
						src={url + "/images/" + product.image}
						alt="productImg"
						className="max-h-[89px] rounded-lg bg-gray-10"
					/>
				</div>
                <div className="max-h-[377px] w-auto flex">
                    <img src={url + "/images/" + product.image} alt="bigImg" className="rounded-xl bg-gray-10" />
                </div>
			</div>
            {/* right side */}
            <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
                <h4 className="bold-28">{product.name}</h4>
                <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
                    <div>${product.price}.00</div>
                    <div className="flex items-start gap-x-1 medium-16 text-secondary">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p>223</p>
                    </div>
                </div>
                {/* product colors, icons buttons */}
                <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
                    <div>
                        <h4 className="bold-16">Select Color:</h4>
                        <div className="flex gap-3 my-3">
                            <div className="bg-secondaryRed h-10 w-10
                             flexCenter cursor-pointer rounded-sm border-b-black active-color"></div>
                            <div className="bg-secondaryYellow h-10 w-10
                             flexCenter cursor-pointer rounded-sm"></div>
                            <div className="bg-secondaryBlue h-10 w-10
                             flexCenter cursor-pointer rounded-sm"></div>
                            <div className="bg-secondaryGreen h-10 w-10
                             flexCenter cursor-pointer rounded-sm"></div>
                        </div>
                    </div>
                    <div>
                        <h4 className="bold-16">Select Size:</h4>
                        <div className="flex gap-3 my-3">
                            <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">S</div>
                            <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">M</div>
                            <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">L</div>
                            <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">XL</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap">
                    <button className="btn-secondary rounded-sm !px-4"><FaHeart /></button>
                    <button onClick={() => navigate("/cart")} className="btn-dark rounded-sm sm:!px-20 !py-2 flexCenter gap-x-2">Go to cart<LuMoveUpRight /></button>
                    {!cartItems[product._id] ? (
                        <FaPlus onClick={() => addToCart(product._id)} className="bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer" />
                    ) : (
                        <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
                            <FaMinus onClick={() => removeFromCart(product._id)} className="h-8 w-8 p-2 cursor-pointer" />
                                <p>{cartItems[product._id]}</p>
                                <FaPlus onClick={() => addToCart(product._id)} className="bg-secondary rounded-sm h-8 w-8 p-1 mr-1 cursor-pointer" />
                        </div>
                    )}
                </div>
                <p>
                    <span className="medium-16 text-tertiary">Category : </span>Women | Jacket | Winter
                </p>
                <p>
                    <span className="medium-16 text-tertiary">Tags : </span>Modern | New Arrivals
                </p>
            </div>
		</selection>
	);
};

export default ProductMD;
