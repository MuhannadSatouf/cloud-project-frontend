import React from "react";
import "./index.css";
import "./css/table.css";
import "./css/sliders.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      <footer />
    </BrowserRouter>
  </React.StrictMode>
);
