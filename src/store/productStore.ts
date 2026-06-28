import { create } from "zustand";
import type { Product } from "../types/product";

interface ProductStore {
  products: Product[];

  addProduct: (product: Product) => void;

  removeProduct: (id: string) => void;

  clearProducts: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),

  clearProducts: () =>
    set({
      products: [],
    }),
}));