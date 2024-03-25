import React, { forwardRef, useId } from "react";

const Select = function (
	{ options, label, className = "", defaulValue = "right", ...props },
	ref
) {
	const id = useId();
	return (
		<label className="w-full max-w-xs ">
			{label && (
				<div className="label">
					<span className="label-text text-lg mb-1">{label}</span>
				</div>
			)}
			<select
				id={id}
				ref={ref}
				defaultValue={defaulValue}
				{...props}
				className="select select-bordered w-full"
			>
				{options?.map((option) => (
					<option value={option} key={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
};

export default forwardRef(Select);
