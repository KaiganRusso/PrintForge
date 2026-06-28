import { DollarSign, Box, Printer, Clock3 } from "lucide-react";
import StatCard from "../components/ui/StatCard";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <StatCard
          title="Lucro"
          value="R$ 0,00"
          icon={<DollarSign />}
        />

        <StatCard
          title="Produtos"
          value="0"
          icon={<Box />}
        />

        <StatCard
          title="Impressões"
          value="0"
          icon={<Printer />}
        />

        <StatCard
          title="Horas"
          value="0h"
          icon={<Clock3 />}
        />
      </div>
    </>
  );
}