import {
  LayoutDashboard,
  Calculator,
  Package,
  Printer,
  History,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Calculadora",
    path: "/calculator",
    icon: Calculator,
  },
  {
    title: "Filamentos",
    path: "/filaments",
    icon: Package,
  },
  {
    title: "Impressoras",
    path: "/printers",
    icon: Printer,
  },
  {
    title: "Histórico",
    path: "/history",
    icon: History,
  },
  {
    title: "Configurações",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        🖨️ <span>PrintForge</span>
      </div>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}