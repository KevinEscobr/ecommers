import { supabase } from "../../../src/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = params;
  // Buscar producto por id o slug (ajusta según tu modelo)
  const { data: producto, error } = await supabase
    .from("productos")
    .select("id, nombre, precio, descripcion, imagen_url")
    .eq("id", slug)
    .single();

  if (error || !producto) {
    return <div className="p-8 text-red-600">Producto no encontrado.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Volver a la tienda</Link>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <Image src={producto.imagen_url} alt={producto.nombre} width={300} height={300} className="rounded mb-6 object-cover" />
        <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">{producto.nombre}</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">{producto.descripcion}</p>
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">${producto.precio}</span>
        <button className="mt-4 px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">Agregar al carrito</button>
      </div>
    </div>
  );
}
