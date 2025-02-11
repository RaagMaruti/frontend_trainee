import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Data from "./pages/Data";
import Profile from "./pages/Profile";
import Lifecycle from "./pages/Lifecycle";

import Header from "./components/Header";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Rules of React
// JSX - 1) single root element, 2) close tags, 3) attributes are camelCase, 4) {} to access JS
// Keys in lists - UUID
// Components should not change variables outside their scope, even props
// Pure functions if not changed, does not re-render
// React has own UI Tree, smaller tree, smaller bundler
// Only state variable changes can cause re-rendering, each component has independent state
// Render (painting) - 1) trigger initial render, 2) render changed components, 3) commit to DOM
// State changes are only reflected on render, in between no values are changed
// Updater function - to change state multiple time between render - n => n + 1
// Do not change object or array elements, set new objects or arrays, do not use mutating methods
// Link - normal routing, useNavigate - forced routing on event
