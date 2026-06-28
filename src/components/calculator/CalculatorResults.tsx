import ResultCard from "./ResultCard";
import Card from "../ui/Card";

interface Props {
  materialCost: number;
  energyCost: number;
  maintenanceCost: number;
  totalCost: number;
  minimumPrice: number;
  idealPrice: number;
  premiumPrice: number;
}

export default function CalculatorResults({
  materialCost,
  energyCost,
  maintenanceCost,
  totalCost,
  minimumPrice,
  idealPrice,
  premiumPrice,
}: Props) {
  return (
    <Card title="Resultado">
      <div className="results-grid">

        <ResultCard
          title="Material"
          value={`R$ ${materialCost.toFixed(2)}`}
        />

        <ResultCard
          title="Energia"
          value={`R$ ${energyCost.toFixed(2)}`}
        />

        <ResultCard
          title="Manutenção"
          value={`R$ ${maintenanceCost.toFixed(2)}`}
        />

        <ResultCard
          title="Custo Total"
          value={`R$ ${totalCost.toFixed(2)}`}
        />

        <ResultCard
          title="Preço Mínimo"
          value={`R$ ${minimumPrice.toFixed(2)}`}
        />

        <ResultCard
          title="Preço Ideal"
          value={`R$ ${idealPrice.toFixed(2)}`}
        />

        <ResultCard
          title="Preço Premium"
          value={`R$ ${premiumPrice.toFixed(2)}`}
        />

      </div>
    </Card>
  );
}