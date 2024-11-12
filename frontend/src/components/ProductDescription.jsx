import React from "react";

const ProductDescription = () => {
	return (
		<div className="max-padd-container mt-20">
			<div className="flex gap-3 mb-4">
				<button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
					Description
				</button>
				<button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">
					Care Guide
				</button>
				<button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">
					Size Guide
				</button>
			</div>
			<div className="flex flex-col pb-16">
				<p className="text-sm">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed perspiciatis nesciunt dicta vel laboriosam quasi molestias eveniet est officia voluptatem, magnam deleniti hic atque placeat, nam ratione saepe culpa in consequuntur similique ad! Aut excepturi suscipit corporis aperiam tenetur eos veniam facere dolorum distinctio alias possimus vero sapiente, molestias quis ut tempore unde libero!
				</p>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore nisi, deserunt doloribus at provident illum odit facere consequatur est explicabo cupiditate minima fugit. Temporibus error perferendis eius!
				</p>
			</div>
		</div>
	);
};

export default ProductDescription;
