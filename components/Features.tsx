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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-500 mb-16">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group relative p-10 text-center bg-zinc-900 border border-teal-900/50 rounded-2xl hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-600/40 transition-all duration-500">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-linear-to-br from-teal-600 to-amber-600 p-5 shadow-xl">
                <f.icon className="w-full h-full text-black" />
              </div>
              <h3 className="text-xl font-bold text-teal-400 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-400">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
