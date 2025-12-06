// src/components/Hero.tsx — FINAL & PERFECT (INTEGER ESTONIA)
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* STRONG SKY BLUE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-sky-400 to-blue-600" />

      {/* Extra depth layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Floating accent orbs — now VISIBLE */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 120, -80, 0],
              y: [0, -100, 60, 0],
            }}
            transition={{
              duration: 25 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: `${15 + i * 18}%`,
              left: `${5 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight drop-shadow-2xl">
            Estonia’s position in
            <br />
            <span className="font-bold text-sky-900 drop-shadow-2xl">
              Northern Europe
            </span>
            <br />
            allows us to support international trade
            <br />
            with{" "}
            <span className="font-bold text-white drop-shadow-2xl">
              speed and technological precision.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-5xl mx-auto font-light leading-relaxed drop-shadow-lg">
            From here we connect European suppliers with clients across Asia and
            beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="px-14 py-8 bg-white text-sky-600 hover:bg-sky-50 text-xl font-medium shadow-2xl">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-14 py-8 border-2 border-white bg-transparent text-white hover:bg-white/20 backdrop-blur text-xl font-medium">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
