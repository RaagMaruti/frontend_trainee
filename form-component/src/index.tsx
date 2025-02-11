import React from "react";
import ReactDOM from "react-dom/client";

import ContactUs from "./pages/ContactUs/ContactUs";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ContactUs />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
