import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-600 p-2 rounded-lg">
                <div className="text-white font-bold text-xl">AC</div>
              </div>
              <span className="text-xl font-bold">CoolPro</span>
            </div>
            <p className="text-gray-400 mb-4">Perkhidmatan aircond profesional yang boleh dipercayai.</p>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-orange-600" />
              <span>03-1234-5678</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Perkhidmatan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Pembaikan
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Penyelenggaraan
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Pemasangan
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Kecemasan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Syarikat</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/work-gallery" className="hover:text-white">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Hubungi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hubungi</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-600 mt-1" />
                <span className="text-sm">123 Jalan Utama, KL 50000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <span className="text-sm">info@coolpro.my</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-600" />
                <span className="text-sm">24/7 Kecemasan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CoolPro. Hak cipta terpelihara.</p>
        </div>
      </div>
    </footer>
  )
}
