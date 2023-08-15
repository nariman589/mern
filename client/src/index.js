import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthPage from "./pages/AuthPage";
import RequireAuth from "./HOC/RequireAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RequireAuth>
			<App />
		</RequireAuth>
	</React.StrictMode>
);
