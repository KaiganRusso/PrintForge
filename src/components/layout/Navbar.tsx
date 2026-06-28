import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Dashboard</h2>
        <p>Bem-vindo ao PrintForge.</p>
      </div>

      <div className="navbar-actions">
        <Bell size={22} />

        <div className="profile">
          <UserCircle size={28} />
          <span>Administrador</span>
        </div>
      </div>
    </header>
  );
}