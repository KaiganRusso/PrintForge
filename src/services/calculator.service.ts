import type { CalculatorInput } from "../types/calculator";
import { calculateCosts } from "../utils/calculations";

export function calculateProduct(data: CalculatorInput) {
  return calculateCosts(data);
}