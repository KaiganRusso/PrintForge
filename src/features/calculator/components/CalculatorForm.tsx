import Card from "../../../components/ui/Card";

import { useCalculator } from "../hooks/useCalculator";

import CalculatorFields from "./CalculatorFields";

export default function CalculatorForm() {
  const form = useCalculator();

  return (
    <Card title="Dados da Impressão">
      <form>
        <CalculatorFields
          register={form.register}
        />
      </form>
    </Card>
  );
}