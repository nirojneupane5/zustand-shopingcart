import { create } from "zustand";

type QuantityStore = {
  quantity: number;
  inc: () => void;
  dec: () => void;
};

const useQuantityStore = create<QuantityStore>((set) => ({
  quantity: 1,
  inc: () => set((state) => ({ quantity: state.quantity + 1 })),
  dec: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),
}));

export default useQuantityStore;
