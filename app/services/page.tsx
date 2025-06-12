import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Zap, Snowflake, Building, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Servis & Penyelenggaraan",
      description: "Servis berkala untuk prestasi optimum",
      features: ["Pemeriksaan lengkap", "Tukar penapis", "Cuci coil", "Kalibrasi termostat"],
      pricing: "Dari RM89",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Pembaikan Kecemasan",
      description: "Perkhidmatan 24/7 untuk masalah mendesak",
      features: ["24/7 tersedia", "Servis hari sama", "Ujian diagnostik", "Penyelesaian pantas"],
      pricing: "Dari RM149",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Snowflake className="h-12 w-12" />,
      title: "Pemasangan Baru",
      description: "Pemasangan sistem aircond baharu",
      features: ["Konsultasi percuma", "Analisis kecekapan", "Pemasangan profesional", "Jaminan kerja"],
      pricing: "Anggaran Percuma",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Perkhidmatan Komersial",
      description: "Penyelesaian aircond untuk perniagaan",
      features: ["Sistem komersial", "Pelan penyelenggaraan", "Pembaikan kecemasan", "Naik taraf sistem"],
      pricing: "Sebut Harga",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const packages = [
    {
      name: "Asas",
      price: "RM89",
      features: ["Pemeriksaan visual", "Tukar penapis", "Pembersihan asas", "Semak prestasi"],
    },
    {
      name: "Lengkap",
      price: "RM149",
      popular: true,
      features: ["Semua dalam Asas", "Cuci coil mendalam", "Semak refrigerant", "Kalibrasi termostat"],
    },
    {
      name: "Premium",
      price: "RM199",
      features: ["Semua dalam Lengkap", "Semak saluran", "Audit tenaga", "Jaminan lanjutan"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-orange-100 text-orange-800 mb-4">Perkhidmatan Profesional</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Perkhidmatan Aircond Lengkap</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Dari penyelenggaraan rutin hingga pembaikan kecemasan dan pemasangan baharu.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
            <Phone className="mr-2 h-5 w-5" />
            03-1234-5678
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-orange-100 p-3 rounded-full w-fit mb-6">
                    <div className="text-orange-600">{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-orange-600">{service.pricing}</p>
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700">Tempah</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pakej Penyelenggaraan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-orange-500 border-2 shadow-lg" : "border-gray-200"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                    Terpopular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-orange-600">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${pkg.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-600 hover:bg-gray-700"}`}
                  >
                    Pilih Pakej
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
