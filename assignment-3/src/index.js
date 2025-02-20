import React from "react";
import ReactDOM from "react-dom/client";

import { TodoProvider } from "./pages/TodoProvider";
import App from "./pages/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<TodoProvider>
		<App />
	</TodoProvider>
);
