import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Data from "./pages/Data";
import FunctionLifecycle from "./pages/FunctionLifecycle";
import ClassLifecycle from "./pages/ClassLifecycle";
import Effects from "./pages/Effects";
import Transition from "./pages/Transition";
import Deferred from "./pages/Deferred";
import Custom from "./pages/Custom";
import Form from "./pages/Form";
import Imparative from "./pages/Imparative";
import Example from "./pages/Example";
import Header from "./components/Header";
import Bio from "./components/Bio";
// import Axios from "./pages/Axios";
// import Action from "./pages/Action";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="data" element={<Data />}>
				<Route index element={<>standard data</>} />
				<Route path="bio/:name?/:team" element={<Bio />} />
			</Route>
			<Route path="function-lifecycle" element={<FunctionLifecycle />} />
			<Route path="class-lifecycle" element={<ClassLifecycle />} />
			<Route path="effects" element={<Effects />} />
			<Route path="deferred" element={<Deferred />} />
			<Route path="transition" element={<Transition />} />
			<Route path="custom" element={<Custom />} />
			<Route path="form" element={<Form />} />
			<Route path="imparative" element={<Imparative />} />
			<Route path="example" element={<Example />} />
			{/* <Route path="/axios" element={<Axios />} /> */}
			{/* <Route path="/action" element={<Action />} /> */}
		</Routes>
	</BrowserRouter>
);
