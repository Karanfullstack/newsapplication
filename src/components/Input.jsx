import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
	{ type = "text", placeholder, label, className = "", ...rest },
	ref
) {
	const id = useId();
	return (
		<label className="input input-bordered flex items-center gap-2">
			{label}
			<input
				ref={ref}
				type={type}
				id={id}
				placeholder={placeholder}
				{...rest}
				className={`grow input-md ${className}`}
			/>
		</label>
	);
});

export { Input };
