/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { categories } from "@/constant";

export default function ProductCategories() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
            Spare Parts for All Major Equipment
          </h2>
          <p className="text-xl text-gray-300">
            OEM & high-quality aftermarket — always available
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={i}>
              <Card className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer border-0 shadow-lg hover:shadow-2xl hover:shadow-teal-600/40 transition-all duration-500">
                <div className="absolute inset-0">
                  {cat.img ? (
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-linear-to-br from-teal-800 via-amber-800 to-teal-900" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-2xl">
                    {cat.title}
                  </h3>
                  <p className="text-lg opacity-95 drop-shadow-lg">
                    {cat.brands}
                  </p>
                </div>

                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-45 translate-x-96 group-hover:translate-x-0 pointer-events-none" />
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
