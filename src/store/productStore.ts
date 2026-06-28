import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface ProductStore {
  products: Product[];

  addProduct: (product: Product) => void;

  updateProduct: (product: Product) => void;

  removeProduct: (id: string) => void;

  clearProducts: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],

      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),

      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((item) =>
            item.id === product.id ? product : item
          ),
        })),

      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter(
            (item) => item.id !== id
          ),
        })),

      clearProducts: () =>
        set({
          products: [],
        }),
    }),
    {
      name: "printforge-products",
    }
  )
);