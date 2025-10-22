"use client";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Cliente Frecuente",
      image: "/globe.svg",
      rating: 5,
      text: "La calidad de los productos es excepcional. El servicio al cliente es muy atento y los envíos siempre llegan a tiempo.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Comprador Verificado",
      image: "/globe.svg",
      rating: 5,
      text: "Increíble experiencia de compra. Los productos superaron mis expectativas y el proceso fue muy sencillo.",
    },
    {
      name: "Ana Martínez",
      role: "Cliente VIP",
      image: "/globe.svg",
      rating: 5,
      text: "Llevo años comprando aquí y nunca me ha decepcionado. Totalmente recomendable para todos.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-24 h-24 text-blue-600" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-500">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
