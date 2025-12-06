// src/components/Features.tsx
import { Card } from "@/components/ui/card";
import { Truck, Wrench, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Worldwide Delivery",
    desc: "Fast shipping to any country",
  },
  {
    icon: Truck,
    title: "Turnkey Procurement",
    desc: "We source, deliver, and install",
  },
  {
    icon: Wrench,
    title: "OEM & Aftermarket",
    desc: "Original and high-quality alternatives",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "All parts tested and certified",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-violet-400 mb-16 drop-shadow-lg">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group relative p-8 text-center bg-zinc-900/95 border border-violet-900/50 rounded-2xl hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-600/40 transition-all duration-500 backdrop-blur-sm">
              {/* Violet glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-violet-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl" />

              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 p-4 shadow-xl shadow-violet-600/50">
                  <f.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-violet-300 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
