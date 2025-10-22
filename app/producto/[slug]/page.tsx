"use client";
import { useEffect, useState } from "react";
import { getUserFromToken } from "../../../src/lib/auth";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

  const { slug } = params;
  const [producto, setProducto] = useState<any>(null);
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const u = getUserFromToken();
    setUser(u);
    if (!u) {
      setError("Debes iniciar sesión para ver este producto.");
      return;
    }
    // Fetch producto desde API (puedes cambiar la ruta según tu backend)
    fetch(`/api/producto/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setProducto(data);
      })
      .catch(() => setError("Error al cargar el producto"));
  }, [slug]);

  if (error) {
    return (
      <div className="p-8 text-red-600 flex flex-col items-center">
        <span className="text-4xl mb-2">😢</span>
        <div>{error}</div>
        <Link href="/login" className="mt-4 text-blue-600 hover:underline">Ir al login</Link>
      </div>
    );
  }

  if (!producto) {
    return <div className="p-8 text-center">Cargando producto...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 animate-fade-in">
      <div className="mb-4 text-right text-sm text-zinc-500">Bienvenido, {user?.email}</div>
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-lg font-medium">← Volver a la tienda</Link>
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="relative">
          <Image src={producto.imagen_url} alt={producto.nombre} width={340} height={340} className="rounded-xl object-cover shadow-lg border-4 border-blue-100 dark:border-zinc-800" />
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">Nuevo</span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-extrabold mb-2 text-black dark:text-white tracking-tight">{producto.nombre}</h1>
          <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">{producto.descripcion}</p>
          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">${producto.precio}</span>
          <button className="mt-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow hover:scale-105 transition-transform duration-200">Agregar al carrito</button>
        </div>
      </div>
      {/* Sección de productos relacionados (placeholder) */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Productos relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aquí puedes mapear productos relacionados en el futuro */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col items-center opacity-60">
            <span className="text-zinc-400">Próximamente...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
