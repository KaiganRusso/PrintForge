import { z } from "zod";

export const calculatorSchema = z.object({
  productName: z.string().min(1, "Informe o nome do produto"),

  filamentPriceKg: z.number().positive(),

  weightGrams: z.number().positive(),

  energyPriceHour: z.number().positive(),

  hours: z.number().min(0),

  minutes: z.number().min(0).max(59),

  maintenance: z.number().min(0),

  multiplier: z.number().min(2).max(4),

  notes: z.string(),
});

export type CalculatorSchema =
  z.infer<typeof calculatorSchema>;