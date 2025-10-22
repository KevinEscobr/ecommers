import { supabase } from "../src/lib/supabaseClient";
import Image from "next/image";

type Producto = {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen_url: string;
};

// Server Component: obtiene productos desde Supabase y renderiza la tienda
export default async function Home() {
  const { data: productos, error } = await supabase
    .from("productos")
    .select("id, nombre, precio, descripcion, imagen_url")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    return (
      <div className="p-8 text-red-600">Error al cargar productos: {error.message}</div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Productos recientes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {productos && productos.length > 0 ? (
          productos.map((producto: Producto) => (
            <div key={producto.id} className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center">
              {producto.imagen_url && (
                <Image src={producto.imagen_url} alt={producto.nombre} width={200} height={200} className="rounded mb-4 object-cover" />
              )}
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{producto.nombre}</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-2">${producto.precio}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{producto.descripcion}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-zinc-500">No hay productos disponibles.</div>
        )}
      </div>
    </div>
  );
}
