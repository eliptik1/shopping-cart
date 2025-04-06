import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartProducts: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cartProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct) return state; // Product already in cart
      return {
        cartProducts: [...state.cartProducts, product],
      };
    }),

  clearCart: () => set({ cartProducts: [] }),
}));
