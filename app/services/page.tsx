// src/app/services/page.tsx
import {
  Truck,
  Plane,
  Ship,
  PackageSearch,
  FileCheck,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Services" };

const services = [
  {
    icon: Plane,
    title: "Air Transportation",
    desc: "Fast delivery for urgent needs",
  },
  {
    icon: Truck,
    title: "Heavy Transportation",
    desc: "Specialised industrial cargo",
  },
  {
    icon: Ship,
    title: "Sea & Intermodal Freight",
    desc: "Cost-effective long-distance solutions",
  },
  {
    icon: PackageSearch,
    title: "Turnkey Procurement",
    desc: "We source, verify, and deliver",
  },
  {
    icon: FileCheck,
    title: "Customs & Documentation",
    desc: "Full compliance support",
  },
  { icon: Globe, title: "Project Logistics", desc: "End-to-end coordination" },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO — BOLD SKY BLUE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-sky-600 via-sky-500 to-blue-600" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto drop-shadow-lg">
            Full suite of logistics options designed for international trade
          </p>
        </div>
      </section>

      {/* SERVICES GRID — SKY BLUE CARDS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-linear-to-r from-sky-500/30 via-sky-400/30 to-sky-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-xl" />
                  <div className="relative h-full bg-white border-2 border-sky-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:border-sky-400 transition-all duration-500 hover:-translate-y-3">
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-sky-600 to-blue-600 p-5 mb-8 shadow-xl">
                      <s.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-sky-700 mb-4">
                      {s.title}
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
