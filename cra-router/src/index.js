import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Data from "./pages/Data";
import Profile from "./pages/Profile";
import FunctionLifecycle from "./pages/FunctionLifecycle";
import ClassLifecycle from "./pages/ClassLifecycle";
import Hooks from "./pages/Hooks";
import Header from "./components/Header";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/data" element={<Data />} />
      <Route path="/function-lifecycle" element={<FunctionLifecycle />} />
      <Route path="/class-lifecycle" element={<ClassLifecycle />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
