"use client";
import { Zap, Shield, Truck, Award } from "lucide-react";

export default function FeaturedSection() {
  const features = [
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Envío express en 24-48h",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Protección total garantizada",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "En pedidos superiores a $50",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Productos certificados",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
