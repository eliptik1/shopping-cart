import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartProducts: [],
  isProductExists: (productId) => {
    const cartProducts = get().cartProducts;
    return cartProducts.some((item) => item.id === productId);
  },

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
  removeFromCart: (productId) => {
    set((state) => {
      const updatedCart = state.cartProducts.filter(
        (item) => item.id !== productId
      );
      return {
        cartProducts: [...updatedCart],
      };
    });
  },
  incrementProduct: (producId) => {
    set((state) => {
      const product = state.cartProducts.find((item) => item.id === producId);
      if (product.stock > product.quantity) {
        return { ...product, quantity: product.quantity++ };
      } else {
        console.log("out of stock");
        return [];
      }
    });
  },

  decrementProduct: (producId) => {
    set((state) => {
      const product = state.cartProducts.find((item) => item.id === producId);
      if (product.quantity > 1) {
        return { ...product, quantity: product.quantity-- };
      } else {
        return [];
      }
    });
  },

  clearCart: () => set({ cartProducts: [] }),
}));
