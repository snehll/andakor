import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-teal-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">ANDAKOR</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ANDAKOR GROUP OÜ
              <br />
              Harju maakond, Tallinn, Kesklinna linnaosa
              <br />
              Roosikrantsi tn 2, 10119
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-teal-500 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-teal-400">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-teal-400">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-teal-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-teal-500 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-teal-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-teal-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-teal-500 mb-4">Contact</h4>
            <p className="text-sm text-gray-400 space-y-2">
              <span className="block">Email: inbox@andakor.ee</span>
              <span className="block">Tallinn, Estonia</span>
            </p>
          </div>
        </div>
        <div className="border-t border-teal-900 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ANDAKOR GROUP OÜ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
