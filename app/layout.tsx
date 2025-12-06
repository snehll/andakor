import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ANDAKOR | UAE Industrial Trade",
    template: "%s | ANDAKOR",
  },
  description:
    "From the United Arab Emirates we support international trade across regions where speed, reliability and clear coordination are essential.",
  openGraph: {
    title: "ANDAKOR GROUP OÜ",
    description:
      "Positioned at a major global crossroads, our operations connect manufacturers and industrial buyers worldwide.",
    url: "https://andakor.ee",
    siteName: "ANDAKOR",
    images: ["/og-andakor.jpg"],
    emails: ["inbox@andakor.ee"],
  },
};
export const viewport: Viewport = {
  themeColor: "#0d9488", // Deep teal — no orange
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
