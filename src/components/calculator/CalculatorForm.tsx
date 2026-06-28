import { useMemo, useState } from "react";
import { calculateCosts } from "../../utils/calculations";
import ResultCard from "./ResultCard";
import Card from "../ui/Card";

export default function CalculatorForm() {
  const [productName, setProductName] = useState("");

  const [filamentPriceKg, setFilamentPriceKg] = useState(100);
  const [weightGrams, setWeightGrams] = useState(20);

  const [energyPriceHour, setEnergyPriceHour] = useState(0.8);

  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(0);

  const [maintenance, setMaintenance] = useState(0.5);

  const [multiplier, setMultiplier] = useState(3);

  const printHours = hours + minutes / 60;

  const result = useMemo(() => {
    return calculateCosts({
      filamentPriceKg,
      weightGrams,
      energyPriceHour,
      printHours,
      maintenance,
      multiplier,
    });
  }, [
    filamentPriceKg,
    weightGrams,
    energyPriceHour,
    printHours,
    maintenance,
    multiplier,
  ]);

  return (
    <div className="calculator-grid">

  <Card title="Dados da Impressão">

    {/* Todo o formulário fica aqui */}

  </Card>

  <Card title="Resultado">

    {/* Todos os ResultCards ficam aqui */}

  </Card>

</div>
      <h2>Calculadora de Custos</h2>

      <label>
        Nome do Produto
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>

      <label>
        Valor do Filamento (R$/kg)
        <input
          type="number"
          value={filamentPriceKg}
          onChange={(e) =>
            setFilamentPriceKg(Number(e.target.value))
          }
        />
      </label>

      <label>
        Peso da Peça (g)
        <input
          type="number"
          value={weightGrams}
          onChange={(e) =>
            setWeightGrams(Number(e.target.value))
          }
        />
      </label>

      <label>
        Energia (R$/hora)
        <input
          type="number"
          step="0.01"
          value={energyPriceHour}
          onChange={(e) =>
            setEnergyPriceHour(Number(e.target.value))
          }
        />
      </label>

      <div className="time-grid">
        <label>
          Horas
          <input
            type="number"
            value={hours}
            onChange={(e) =>
              setHours(Number(e.target.value))
            }
          />
        </label>

        <label>
          Minutos
          <input
            type="number"
            value={minutes}
            onChange={(e) =>
              setMinutes(Number(e.target.value))
            }
          />
        </label>
      </div>

      <label>
        Manutenção
        <input
          type="number"
          step="0.01"
          value={maintenance}
          onChange={(e) =>
            setMaintenance(Number(e.target.value))
          }
        />
      </label>

      <label>
        Multiplicador
        <select
          value={multiplier}
          onChange={(e) =>
            setMultiplier(Number(e.target.value))
          }
        >
          <option value={2}>2x</option>
          <option value={3}>3x</option>
          <option value={4}>4x</option>
        </select>
      </label>

      <hr />

      <div className="results-grid">
        <ResultCard
          title="Material"
          value={`R$ ${result.materialCost.toFixed(2)}`}
        />

        <ResultCard
          title="Energia"
          value={`R$ ${result.energyCost.toFixed(2)}`}
        />

        <ResultCard
          title="Manutenção"
          value={`R$ ${result.maintenanceCost.toFixed(2)}`}
        />

        <ResultCard
          title="Custo Total"
          value={`R$ ${result.totalCost.toFixed(2)}`}
        />

        <ResultCard
          title="Preço Mínimo (2x)"
          value={`R$ ${result.minimumPrice.toFixed(2)}`}
        />

        <ResultCard
          title="Preço Ideal (3x)"
          value={`R$ ${result.idealPrice.toFixed(2)}`}
        />

        <ResultCard
          title="Preço Premium (4x)"
          value={`R$ ${result.premiumPrice.toFixed(2)}`}
        />
      </div>
    </div>
  );
}