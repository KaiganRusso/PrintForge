import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  calculatorSchema,
  type CalculatorSchema,
} from "../schemas/calculator.schema";

export function useCalculator() {
  return useForm<CalculatorSchema>({
    resolver: zodResolver(calculatorSchema),

    defaultValues: {
      productName: "",

      filamentPriceKg: 100,

      weightGrams: 20,

      energyPriceHour: 0.8,

      hours: 2,

      minutes: 0,

      maintenance: 0.5,

      multiplier: 3,

      notes: "",
    },
  });
}