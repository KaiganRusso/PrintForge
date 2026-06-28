import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <Navbar />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}