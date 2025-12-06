// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-50 border-t mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-4">INTEGER</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              INTEGER WW FZ-LLC
              <br />
              Compass building - Al Hulaila VUNE0431
              <br />
              AL Hulaila Industrial Zone-FZ
              <br />
              Ras Al Khaimah, United Arab Emirates
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sky-700 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-700 hover:text-sky-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-700 hover:text-sky-600">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-700 hover:text-sky-600">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-sky-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sky-700 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-700 hover:text-sky-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-700 hover:text-sky-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sky-700 mb-4">Contact</h4>
            <p className="text-sm text-slate-700 space-y-2">
              <span className="block">Email: mail@integer.ae</span>
              <span className="block">Ras Al Khaimah, UAE</span>
            </p>
          </div>
        </div>

        <div className="border-t border-sky-200 pt-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} INTEGER WW FZ-LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
