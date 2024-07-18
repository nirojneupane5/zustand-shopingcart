import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
};

type CartStore = {
  cart: Product[];
  quantities: { [key: number]: number }; // To store quantities of each product
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  inc: (productId: number) => void;
  dec: (productId: number) => void;
};

//
const useCartStore = create<CartStore>((set) => ({
  cart: [],
  quantities: {},

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((cart) => cart.id === product.id);
      if (!exists) {
        return {
          cart: [...state.cart, product],
          quantities: { ...state.quantities, [product.id]: 1 },
        };
      } else {
        // If product exists, increment its quantity
        return {
          quantities: {
            ...state.quantities,
            [product.id]: state.quantities[product.id] + 1,
          },
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const newCart = state.cart.filter((product) => product.id !== productId);
      const { [productId]: _, ...newQuantities } = state.quantities; // Remove the quantity entry
      return {
        cart: newCart,
        quantities: newQuantities,
      };
    }),

  clearCart: () => set({ cart: [], quantities: {} }),

  inc: (productId) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [productId]: (state.quantities[productId] || 1) + 1,
      },
    })),

  dec: (productId) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [productId]: Math.max(1, (state.quantities[productId] || 1) - 1),
      },
    })),
}));

export default useCartStore;
