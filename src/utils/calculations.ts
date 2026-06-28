import type {
  CalculatorInput,
  CalculatorResult,
} from "../types/calculator";

export function calculateCosts(
  data: CalculatorInput
): CalculatorResult {
  const materialCost =
    (data.filamentPriceKg / 1000) *
    data.weightGrams;

  const energyCost =
    data.energyPriceHour *
    data.printHours;

  const maintenanceCost =
    data.maintenance;

  const totalCost =
    materialCost +
    energyCost +
    maintenanceCost;

  const minimumPrice = totalCost * 2;
  const idealPrice = totalCost * 3;
  const premiumPrice = totalCost * 4;

  return {
    materialCost,
    energyCost,
    maintenanceCost,
    totalCost,
    minimumPrice,
    idealPrice,
    premiumPrice,
  };
}