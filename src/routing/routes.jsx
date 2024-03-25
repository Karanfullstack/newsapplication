import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import App from "../App";
import AuthProteced from "./AuthProteced";
import ViewPage from "../pages/ViewPage";
import Add from "../components/Add";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: (
					<AuthProteced isProtected={true}>
						<Home />
					</AuthProteced>
				),
			},

			{
				path: "/login",
				element: (
					<AuthProteced isProtected={false}>
						<Login />
					</AuthProteced>
				),
			},
			{
				path: "/register",
				element: (
					<AuthProteced isProtected={false}>
						<Register />
					</AuthProteced>
				),
			},
			{
				path: "/view",
				element: (
					<AuthProteced isProtected={true}>
						<ViewPage />
					</AuthProteced>
				),
			},
			{
				path: "/add",
				element: <Add />,
			},
		],
	},
]);

export { router };
