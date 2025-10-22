import { create } from "zustand";

export type CartItem = {
  id: string;
  nombre: string;
  precio: number;
  imagen_url: string;
  cantidad: number;
};

interface CartState {
  items: CartItem[];
  add: (item: Omit<CartItem, "cantidad">) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useCart = create((set: (partial: Partial<CartState> | ((state: CartState) => Partial<CartState>), replace?: boolean) => void, get: () => CartState) => ({
  items: [],
  add: (item: Omit<CartItem, "cantidad">) => {
    const items = get().items;
    const idx = items.findIndex((i: CartItem) => i.id === item.id);
    if (idx !== -1) {
      set({
        items: items.map((i: CartItem, iIdx: number) =>
          iIdx === idx ? { ...i, cantidad: i.cantidad + 1 } : i
        ),
      });
    } else {
      set({ items: [...items, { ...item, cantidad: 1 }] });
    }
  },
  remove: (id: string) => set({ items: get().items.filter((i: CartItem) => i.id !== id) }),
  clear: () => set({ items: [] }),
}));
