import StatCard from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <>
      <div className="cards">
        <StatCard title="Custo Total" value="R$ 0,00" />

        <StatCard title="Lucro" value="R$ 0,00" />

        <StatCard title="Peças Produzidas" value="0" />

        <StatCard title="Filamento Consumido" value="0 g" />
      </div>
    </>
  );
}