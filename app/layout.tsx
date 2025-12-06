// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "INTEGER | Estonia Industrial Trade",
    template: "%s | INTEGER",
  },
  description:
    "Estonia’s digital gateway for industrial trade — fast, transparent, and technologically precise.",
  openGraph: {
    title: "INTEGER WW FZ-LLC",
    description:
      "Estonia’s position in Northern Europe allows us to support international trade with speed and technological precision.",
    url: "https://integer.ae",
    siteName: "INTEGER",
    images: ["/og-integer.jpg"],
    emails: ["mail@integer.ae"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9", // Sky blue — Nordic tech feel
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
