"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Heart } from "lucide-react";

type Producto = {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen_url: string;
};

type ProductGridProps = {
  productos: Producto[];
};

export default function ProductGrid({ productos }: ProductGridProps) {
  const [filter, setFilter] = useState("todos");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <section id="productos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Encuentra lo que necesitas en nuestra colección cuidadosamente seleccionada
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {["todos", "nuevo", "popular", "oferta"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium capitalize transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div
              key={producto.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => toggleFavorite(producto.id)}
                  className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      favorites.has(producto.id)
                        ? "fill-red-500 text-red-500"
                        : "text-slate-400 hover:text-red-500"
                    }`}
                  />
                </button>

                <Link href={`/producto/${producto.id}`} className="block">
                  <div className="relative h-72 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={producto.imagen_url}
                      alt={producto.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {producto.nombre}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {producto.descripcion}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${producto.precio}
                        </span>
                      </div>
                      
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:gap-3">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Añadir</span>
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                    NUEVO
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {productos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No hay productos disponibles en este momento
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
