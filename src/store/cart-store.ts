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
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  quantity: number;
  inc: (productId: number) => void;
  dec: (productId: number) => void;
};

//
const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((cart) => cart.id === product.id);
      if (!exists) {
        return { cart: [...state.cart, product] };
      } else {
        return state;
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
  quantity: 1,
  inc: () => set((state) => ({ quantity: state.quantity + 1 })),
  dec: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),
}));

export default useCartStore;
