"use client";
import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 md:p-16 shadow-2xl animate-fade-in">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQsNHYyYzAgMi0yIDQtNCA0cy00LTItNC00di0yem0wLTMwYzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNC00LTItNC00di0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg animate-bounce">
              <Gift className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">
                Oferta Exclusiva
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              ¿Listo para Empezar?
              <span className="block mt-2">
                Obtén 20% de Descuento
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Regístrate hoy y recibe un descuento especial en tu primera compra. Únete a miles de clientes satisfechos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/registro"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Registrarse Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#productos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Ver Catálogo
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Garantizado</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Soporte</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30 días</div>
                <div className="text-sm text-white/80">Devolución</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
