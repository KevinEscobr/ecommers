"use client";
import { useCart, CartItem } from "../../src/store/cart";
import Image from "next/image";

export default function Carrito() {
  const { items, remove, clear } = useCart();
  const total = items.reduce((acc: number, item: CartItem) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Carrito de compras</h1>
      {items.length === 0 ? (
        <div className="text-center text-zinc-500">Tu carrito está vacío.</div>
      ) : (
        <div className="space-y-4">
          {items.map((item: CartItem) => (
            <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-zinc-900 rounded-lg shadow p-4">
              <Image src={item.imagen_url} alt={item.nombre} width={60} height={60} className="rounded object-cover" />
              <div className="flex-1">
                <div className="font-semibold text-black dark:text-white">{item.nombre}</div>
                <div className="text-zinc-500 text-sm">Cantidad: {item.cantidad}</div>
                <div className="text-zinc-700 dark:text-zinc-300">${item.precio}</div>
              </div>
              <button onClick={() => remove(item.id)} className="text-red-600 hover:underline">Eliminar</button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold text-lg">Total:</span>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">${total.toFixed(2)}</span>
          </div>
          <button onClick={clear} className="w-full mt-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">Vaciar carrito</button>
        </div>
      )}
    </div>
  );
}
