import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/routes.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Toaster position="top-center" />
		<RouterProvider router={router} />
	</Provider>
);
