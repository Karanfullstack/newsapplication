import React from "react";
import Select from "../common/Select";
import TipTapEditor from "../common/TipTapEditor";
export default function Add() {
	return (
		<section className="grid grid-cols-2  mt-7  p-2  ">
			<div className="w-full flex flex-col gap-3">
				<div>
					<p className=" text-center text-2xl tracking-wider mb-3">Title</p>
					<input type="text" className="input w-full input-bordered" />
				</div>
				<div className="mt-3">
					<p className=" text-center text-2xl tracking-wider mb-3">Slug</p>
					<input type="text" className="input w-full input-bordered" />
				</div>
			</div>
			<div className=" flex flex-col justify-start mt-5 items-center w-full gap-2 ">
				<input type="file" className="file-input w-full max-w-xs" />
				<Select label="Select Status" options={["Active", "Deactive"]} />
				<button className="btn btn-primary mt-7">Submit Post</button>
			</div>
			<div className=" col-span-2 ">
				<TipTapEditor />
			</div>
		</section>
	);
}
