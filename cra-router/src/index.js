import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Data from "./pages/Data";
import Profile from "./pages/Profile";
import Lifecycle from "./pages/Lifecycle";

import Header from "./components/Header";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/data" element={<Data />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
