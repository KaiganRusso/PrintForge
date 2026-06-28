import {
  DollarSign,
  Package,
  Printer,
  Clock3,
} from "lucide-react";

import StatCard from "../components/ui/StatCard";
import ProductList from "../components/dashboard/ProductList";
import { useProductStore } from "../store/productStore";

export default function Dashboard() {
  const products = useProductStore((state) => state.products);

  const totalProducts = products.length;

  const totalRevenue = products.reduce(
    (sum, product) => sum + product.idealPrice,
    0
  );

  const totalHours = products.reduce(
    (sum, product) => sum + product.weight / 100,
    0
  );

  const averageCost =
    totalProducts === 0
      ? 0
      : products.reduce(
          (sum, product) => sum + product.totalCost,
          0
        ) / totalProducts;

  return (
    <>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <StatCard
          title="Receita Estimada"
          value={`R$ ${totalRevenue.toFixed(2)}`}
          icon={<DollarSign />}
        />

        <StatCard
          title="Produtos"
          value={String(totalProducts)}
          icon={<Package />}
        />

        <StatCard
          title="Custo Médio"
          value={`R$ ${averageCost.toFixed(2)}`}
          icon={<Printer />}
        />

        <StatCard
          title="Horas Estimadas"
          value={`${totalHours.toFixed(1)} h`}
          icon={<Clock3 />}
        />
      </div>

      <ProductList />
    </>
  );
}