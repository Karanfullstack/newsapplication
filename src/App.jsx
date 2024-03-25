import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Container from "./common/Container";
import { useLocation } from "react-router-dom";
import { currentUser } from "./store/slice/authSlice";
import { useDispatch } from "react-redux";

export default function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(currentUser());
	}, [location]);
	return (
		<Container>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
		</Container>
	);
}
