export interface CalculatorInput {
  filamentPriceKg: number;
  weightGrams: number;

  energyPriceHour: number;
  printHours: number;

  maintenance: number;

  multiplier: number;
}

export interface CalculatorResult {
  materialCost: number;
  energyCost: number;
  maintenanceCost: number;

  totalCost: number;

  minimumPrice: number;
  idealPrice: number;
  premiumPrice: number;
}