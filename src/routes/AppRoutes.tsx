import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Calculator from "../pages/Calculator";
import Filaments from "../pages/Filaments";
import Printers from "../pages/Printers";
import History from "../pages/History";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/filaments" element={<Filaments />} />
        <Route path="/printers" element={<Printers />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}