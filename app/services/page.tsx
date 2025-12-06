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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-teal-950 via-black to-teal-950" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow">
            Full suite of logistics solutions built for international trade
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-linear-to-r from-teal-600/40 to-cyan-600/40 rounded-3xl opacity-0 group-hover:opacity-100 transition blur-xl" />
                  <div className="relative h-full bg-zinc-900 border border-teal-900/50 rounded-3xl p-10 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-600/30 transition-all">
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-teal-600 to-teal-700 p-5 mb-8">
                      <s.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal-400 mb-4">
                      {s.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{s.desc}</p>
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
