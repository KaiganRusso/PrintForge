import { calculateCosts } from "../../../utils/calculations";

import type { CalculatorInput } from "../../../types/calculator";

export function calculateProduct(
  data: CalculatorInput
) {
  return calculateCosts(data);
}