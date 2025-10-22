
"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

type NavbarProps = {
  cartCount?: number;
};

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 shadow-sm py-4 px-6 flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          tienda
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/login" className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:underline">
          Login/Registro
        </Link>
        <Link href="/carrito" className="relative flex items-center">
          <ShoppingCart className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
