import { create } from "zustand";

interface DashboardStore {

  revenue: number;

  expenses: number;

  profit: number;

  totalProducts: number;

  totalCustomers: number;

  totalPrinters: number;

  updateRevenue: (value: number) => void;

}

export const useDashboardStore =
create<DashboardStore>((set) => ({

  revenue: 0,

  expenses: 0,

  profit: 0,

  totalProducts: 0,

  totalCustomers: 0,

  totalPrinters: 0,

  updateRevenue: (value) =>
    set({ revenue: value }),

}));