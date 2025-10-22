"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 shadow-lg animate-slide-down">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Nueva Colección 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight animate-slide-up">
            Descubre el Estilo
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              que Te Define
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Productos seleccionados con calidad excepcional. Diseño moderno y funcionalidad perfecta para tu estilo de vida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link
              href="#productos"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Explorar Productos</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Crear Cuenta
            </Link>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8 animate-slide-up delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Productos</div>
            </div>
            <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">10K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Clientes</div>
            </div>
            <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">4.9★</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Valoración</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
