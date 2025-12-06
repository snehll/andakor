// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      {/* HERO — BOLD SKY BLUE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-sky-700 via-sky-600 to-blue-700" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Let’s Work Together
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            Tell us what you need — spare part, full project, or logistics
            support.
            <br />
            We reply within 4 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-sky-700 mb-8">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-sky-700 mb-4">
                  INTEGER WW FZ-LLC
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Compass building - Al Hulaila VUNE0431
                  <br />
                  AL Hulaila Industrial Zone-FZ
                  <br />
                  Ras Al Khaimah, United Arab Emirates
                  <br />
                  Email: mail@integer.ae
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-sky-700 mb-4">
                  Response Time
                </h3>
                <p className="text-xl text-slate-700">
                  Usually within 4 hours (Mon–Fri)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
