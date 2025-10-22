import { supabase } from "../src/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

type Producto = {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen_url: string;
};

// Server Component: obtiene productos desde Supabase y renderiza la tienda
export default async function Home() {
  // Consulta productos
  const { data: productos, error } = await supabase
    .from("productos")
    .select("id, nombre, precio, descripcion, imagen_url")
    .order("created_at", { ascending: false })
    .limit(10);

  // Si no hay productos, muestra 3 ejemplos (solo UI, no en la base)
  const productosEjemplo: Producto[] = [
    {
      id: "1",
      nombre: "Camiseta Minimal",
      precio: 19.99,
      descripcion: "Camiseta de algodón orgánico, diseño limpio y cómodo.",
      imagen_url: "/minimal-shirt.jpg",
    },
    {
      id: "2",
      nombre: "Taza Moderna",
      precio: 9.99,
      descripcion: "Taza de cerámica blanca, perfecta para café o té.",
      imagen_url: "/modern-mug.jpg",
    },
    {
      id: "3",
      nombre: "Mochila Urbana",
      precio: 39.99,
      descripcion: "Mochila resistente y ligera, ideal para el día a día.",
      imagen_url: "/urban-backpack.jpg",
    },
  ];

  const mostrarProductos = productos && productos.length > 0 ? productos : productosEjemplo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-black dark:text-white tracking-tight">Tienda Minimalista</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mostrarProductos.map((producto: Producto) => (
          <Link key={producto.id} href={`/producto/${producto.id}`} className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-zinc-200 dark:border-zinc-800 cursor-pointer">
            <div className="w-40 h-40 flex items-center justify-center mb-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
              <Image
                src={producto.imagen_url}
                alt={producto.nombre}
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-lg font-semibold mb-1 text-black dark:text-white text-center">{producto.nombre}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-2 text-center">{producto.descripcion}</p>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">${producto.precio}</span>
            <span className="mt-auto px-4 py-2 rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium w-full text-center">Ver detalles</span>
          </Link>
        ))}
      </div>
      {productos && productos.length === 0 && (
        <div className="text-center text-zinc-500 mt-8">No hay productos en la base de datos. Se muestran ejemplos.</div>
      )}
    </div>
  );
}
