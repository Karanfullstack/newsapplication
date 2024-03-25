import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card() {
	const navigate = useNavigate();
	return (
		<div className="card w-[300px] bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-sm">
					How to create a website with nodejs
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-center">
					<button
						onClick={() => navigate("/view")}
						className="btn w-full text-sm btn-primary"
					>
						View
					</button>
				</div>
			</div>
		</div>
	);
}
