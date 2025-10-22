import { create } from "zustand";

export type CartItem = {
  id: string;
  nombre: string;
  precio: number;
  imagen_url: string;
  cantidad: number;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "cantidad">) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create((set: (fn: (state: CartState) => Partial<CartState>) => void) => ({
  items: [],
  add: (item: Omit<CartItem, "cantidad">) =>
    set((state: CartState): Partial<CartState> => {
      const found = state.items.find((i: CartItem) => i.id === item.id);
      if (found) {
        return {
          items: state.items.map((i: CartItem) =>
            i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, cantidad: 1 }] };
    }),
  remove: (id: string) =>
    set((state: CartState): Partial<CartState> => ({
      items: state.items.filter((i: CartItem) => i.id !== id),
    })),
  clear: () => set((): Partial<CartState> => ({ items: [] })),
}));
