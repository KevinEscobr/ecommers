import { supabase } from "../src/lib/supabaseClient";
import HeroSection from "../src/components/HeroSection";
import ProductGrid from "../src/components/ProductGrid";
import FeaturedSection from "../src/components/FeaturedSection";
import TestimonialsSection from "../src/components/TestimonialsSection";
import CTASection from "../src/components/CTASection";

type Producto = {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen_url: string;
};

export default async function Home() {
  const { data: productos, error } = await supabase
    .from("productos")
    .select("id, nombre, precio, descripcion, imagen_url")
    .order("created_at", { ascending: false })
    .limit(10);

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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <HeroSection />
      <FeaturedSection />
      <ProductGrid productos={mostrarProductos} />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
