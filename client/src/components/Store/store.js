import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  addProduct: (id) => set((state) => ({ products: [...state.products, id] })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((elem) => elem !== id),
    })),
}));
