import React from "react";

export default function ViewCard() {
	return (
		<div className="card card-compact w-full max-w-4xl m-auto bg-base-100 shadow-xl">
			<figure>
				<img
					className="w-full h-72 object-cover object-center"
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Accept</button>
					<button className="btn btn-ghost">Deny</button>
				</div>
			</div>
		</div>
	);
}
