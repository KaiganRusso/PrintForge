import type { UseFormRegister } from "react-hook-form";
import type { CalculatorSchema } from "../schemas/calculator.schema";

interface Props {
  register: UseFormRegister<CalculatorSchema>;
}

export default function CalculatorFields({
  register,
}: Props) {
  return (
    <>
      <label>
        Nome do Produto

        <input
          type="text"
          {...register("productName")}
        />
      </label>

      <label>
        Valor do Filamento (R$/kg)

        <input
          type="number"
          {...register("filamentPriceKg", {
            valueAsNumber: true,
          })}
        />
      </label>

      <label>
        Peso (g)

        <input
          type="number"
          {...register("weightGrams", {
            valueAsNumber: true,
          })}
        />
      </label>

      <label>
        Energia (R$/hora)

        <input
          type="number"
          step="0.01"
          {...register("energyPriceHour", {
            valueAsNumber: true,
          })}
        />
      </label>

      <div className="time-grid">
        <label>
          Horas

          <input
            type="number"
            {...register("hours", {
              valueAsNumber: true,
            })}
          />
        </label>

        <label>
          Minutos

          <input
            type="number"
            {...register("minutes", {
              valueAsNumber: true,
            })}
          />
        </label>
      </div>

      <label>
        Manutenção

        <input
          type="number"
          step="0.01"
          {...register("maintenance", {
            valueAsNumber: true,
          })}
        />
      </label>

      <label>
        Multiplicador

        <select
          {...register("multiplier", {
            valueAsNumber: true,
          })}
        >
          <option value={2}>2x</option>
          <option value={3}>3x</option>
          <option value={4}>4x</option>
        </select>
      </label>

      <label>
        Observações

        <textarea
          rows={4}
          {...register("notes")}
        />
      </label>
    </>
  );
}