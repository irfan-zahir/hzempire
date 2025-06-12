import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star, Clock } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WorkGalleryPage() {
  const workLogs = [
    {
      id: 1,
      title: "Penggantian Sistem Aircond Lengkap",
      location: "Kuala Lumpur",
      date: "15 Mac 2024",
      service: "Pemasangan",
      duration: "6 jam",
      description:
        "Ganti sistem lama 15 tahun dengan unit 3 tan baharu yang jimat tenaga. Pelanggan melaporkan peningkatan serta-merta dalam penyejukan dan pengurangan 30% dalam bil elektrik.",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      customerName: "Puan Siti",
      rating: 5,
      testimonial: "Pasukan sangat profesional dan cekap. Aircond baharu berfungsi dengan sempurna!",
    },
    {
      id: 2,
      title: "Pembaikan Kompressor Kecemasan",
      location: "Petaling Jaya",
      date: "12 Mac 2024",
      service: "Pembaikan Kecemasan",
      duration: "3 jam",
      description:
        "Panggilan kecemasan lewat malam untuk kompressor rosak. Mendiagnosis masalah dan memulihkan penyejukan dalam masa 3 jam.",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      customerName: "Encik Ahmad",
      rating: 5,
      testimonial: "Datang pada 11 malam hujung minggu dan selesaikan masalah pada 2 pagi. Perkhidmatan luar biasa!",
    },
    {
      id: 3,
      title: "Penyelenggaraan HVAC Komersial",
      location: "Shah Alam",
      date: "10 Mac 2024",
      service: "Penyelenggaraan",
      duration: "4 jam",
      description:
        "Penyelenggaraan suku tahunan pada sistem komersial 5 unit. Cuci coil, tukar penapis, dan optimumkan prestasi.",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      customerName: "Kompleks Pejabat",
      rating: 5,
      testimonial: "Penyelenggaraan berkala memastikan sistem berjalan lancar. Perkhidmatan profesional setiap kali.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-orange-100 text-orange-800 mb-4">Galeri Kerja</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Lihat Kerja Pakar Kami</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Projek sebenar, hasil nyata. Lihat mengapa pelanggan mempercayai CoolPro.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {workLogs.map((log, index) => (
              <Card key={log.id} className="border-2 hover:border-orange-200 transition-colors">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-center">Sebelum</h4>
                          <Image
                            src={log.beforeImage || "/placeholder.svg"}
                            alt={`Sebelum - ${log.title}`}
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md w-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-center">Selepas</h4>
                          <Image
                            src={log.afterImage || "/placeholder.svg"}
                            alt={`Selepas - ${log.title}`}
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Badge className="bg-orange-100 text-orange-800 mb-3">{log.service}</Badge>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{log.title}</h3>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{log.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{log.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{log.duration}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">{log.description}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                          <div className="flex">
                            {[...Array(log.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="ml-2 font-medium text-gray-900">{log.customerName}</span>
                        </div>
                        <p className="text-gray-700 italic text-sm">"{log.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sedia Untuk Perkhidmatan Pakar?</h2>
          <p className="text-xl mb-8">Sertai ratusan pelanggan yang mempercayai CoolPro.</p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Tempah Hari Ini
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
