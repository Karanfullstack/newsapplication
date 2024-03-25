import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/slice/authSlice";
import { Link } from "react-router-dom";
import ConfettiComponent from "../common/ConfettiComponent";
import ThemeChanger from "../common/ThemeChanger";
import { SERVER_IMAGE } from "../constants/constant";
export default function Navbar() {
	const dispatch = useDispatch();
	const { status } = useSelector((state) => state.auth);
	const user = useSelector((state) => state.auth?.data?.data);
	const profileImage = useSelector((state) => state.auth?.data?.data?.profile);
	const logoutUserFunction = async () => {
		try {
			const response = await dispatch(logoutUser());
			sessionStorage.removeItem("confettiShown");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	// show confetti

	// if user not logged in don't show navbar
	if (!status) {
		return;
	}
	return (
		<nav className="navbar  bg-base-100 p-4 w-full max-w-full relative">
			<ThemeChanger />
			<ConfettiComponent />
			<div className="flex-1">
				<Link to={"/"} className="btn btn-ghost text-xl">
					NEWSHUB
				</Link>
			</div>

			<div className="flex-none gap-2">
				<Link to={"/add"} className="btn btn-neutral mr-4">
					ADD
				</Link>
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-96 "
					/>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src={`${SERVER_IMAGE}${profileImage}`}
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						{status && (
							<>
								<li>
									<a className="justify-between">{user?.email}</a>
								</li>
								<li>
									<a className="justify-between" onClick={logoutUserFunction}>
										Logout
									</a>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
