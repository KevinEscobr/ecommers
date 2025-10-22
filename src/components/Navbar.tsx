
"use client";
import Link from "next/link";
import { ShoppingCart, User, Menu, X, Search, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserFromToken } from "../lib/auth";

type NavbarProps = {
  cartCount?: number;
};

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const [user, setUser] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setUser(getUserFromToken());
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <span className="text-2xl font-bold text-white tracking-tight">
                  Tienda
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#productos"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/categorias"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Categorías
            </Link>
            <Link
              href="/ofertas"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Ofertas
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Search className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>

            <button className="hidden md:flex p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>

            {user?.email ? (
              <Link
                href="/perfil"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <User className="w-4 h-4" />
                <span className="max-w-[100px] truncate">{user.email}</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <User className="w-4 h-4" />
                Login
              </Link>
            )}

            <Link
              href="/carrito"
              className="relative flex items-center p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 animate-slide-down">
            <div className="flex flex-col gap-3">
              <Link
                href="/#productos"
                className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/categorias"
                className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categorías
              </Link>
              <Link
                href="/ofertas"
                className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ofertas
              </Link>
              {!user?.email && (
                <Link
                  href="/login"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login / Registro
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
