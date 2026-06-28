export interface Product {
  id: string;

  name: string;

  weight: number;

  materialCost: number;

  energyCost: number;

  maintenanceCost: number;

  totalCost: number;

  minimumPrice: number;

  idealPrice: number;

  premiumPrice: number;

  createdAt: string;
}