export interface Product {
  id: string;

  name: string;

  weight: number;

  printHours: number;

  filamentPriceKg: number;

  energyPriceHour: number;

  maintenance: number;

  multiplier: number;

  materialCost: number;

  energyCost: number;

  maintenanceCost: number;

  totalCost: number;

  minimumPrice: number;

  idealPrice: number;

  premiumPrice: number;

  notes: string;

  createdAt: string;
}