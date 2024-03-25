import React from "react";

export default function InputError({ errors, name }) {
	return (
		<>
			{errors && (
				<span className="text-gray-500  ml-4 mt-1 inline-block ">
					{errors[name]?.message}
				</span>
			)}
		</>
	);
}
