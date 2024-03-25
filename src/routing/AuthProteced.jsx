import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AuthProteced({ children, isProtected = true }) {
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();
	useEffect(() => {
		if (isProtected && authStatus !== isProtected) {
			navigate("/login");
		} else if (!isProtected && authStatus !== isProtected) {
			navigate("/");
		}
	}, [authStatus, isProtected]);
	return <>{children}</>;
}
