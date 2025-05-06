import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  addProduct: (newProduct) =>
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (p) => p.id === newProduct.id && p.size === newProduct.size
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity += newProduct.quantity;
        return { products: updatedProducts };
      }

      return {
        products: [...state.products, newProduct],
      };
    }),
  removeProduct: (id, size) =>
    set((state) => ({
      products: state.products.filter(
        (product) => !(product.id === id && product.size === size)
      ),
    })),
  updateQuantity: (id, size, plusMinus) => {
    set((state) => {
      const updatedProductsQuantity = state.products.map((elem) => {
        if (elem.id === id && elem.size === size) {
          return {
            ...elem,
            quantity:
              elem.quantity + plusMinus > 0 ? elem.quantity + plusMinus : 1,
          };
        }
        return elem;
      });

      return { products: updatedProductsQuantity };
    });
  },
}));
