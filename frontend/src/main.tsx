import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Route from react-router-dom
import Admin from "./components/admin/Admin.tsx";
import AdminPanel from "./components/admin/AdminPanel.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/conf/admin" element={<Admin />} />
        <Route path="/conf/admin-panel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
