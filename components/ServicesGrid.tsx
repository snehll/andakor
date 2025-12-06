// src/components/ServicesGrid.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Truck, Ship, Globe, Package, Warehouse } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Plane,
    title: "Air Transportation",
    desc: "Fast global air freight for urgent spare parts delivery",
  },
  {
    icon: Truck,
    title: "Heavy Transportation",
    desc: "Oversized and heavy industrial equipment logistics",
  },
  {
    icon: Ship,
    title: "Road & Intermodal Transport",
    desc: "Efficient road, rail, and combined transport solutions",
  },
  {
    icon: Globe,
    title: "Door-to-Door Air Cargo",
    desc: "Complete pickup-to-delivery service worldwide",
  },
  {
    icon: Package,
    title: "Project Transportation",
    desc: "Complex, multi-stage logistics for large projects",
  },
  {
    icon: Warehouse,
    title: "Full Turnkey Logistics",
    desc: "Procurement, storage, customs clearance, and final delivery",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-4">
            Comprehensive Logistics & Supply Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Every service is built around{" "}
            <strong className="text-violet-300">
              precision, documentation accuracy, and reliable timing
            </strong>
            . From single spare part to full turbine overhaul — we handle it
            all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={i}>
              <Card className="h-full border border-violet-900/50 bg-zinc-900/95 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-600/30 transition-all duration-500 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-4 shadow-xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-violet-400">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
