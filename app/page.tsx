import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Clock, Shield, Wrench, Snowflake, Zap, CheckCircle, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Servis & Penyelenggaraan",
      description: "Servis berkala untuk prestasi optimum",
      price: "Dari RM89",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Pembaikan Kecemasan",
      description: "Perkhidmatan 24/7 untuk masalah mendesak",
      price: "Dari RM149",
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Pemasangan Baru",
      description: "Pemasangan sistem aircond baharu",
      price: "Anggaran Percuma",
    },
  ]

  const testimonials = [
    {
      name: "Siti Aminah",
      location: "Kuala Lumpur",
      rating: 5,
      text: "Perkhidmatan terbaik! Aircond saya diperbaiki dalam masa 2 jam.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ahmad Rahman",
      location: "Petaling Jaya",
      rating: 5,
      text: "Profesional dan tepat masa. Sangat memuaskan!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lim Wei Ming",
      location: "Shah Alam",
      rating: 5,
      text: "Harga berpatutan, kerja berkualiti tinggi.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800">Perkhidmatan 24/7</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Pakar Aircond
                  <span className="text-orange-600"> Terpercaya</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Servis aircond profesional. Berlesen, berkualiti, dan perkhidmatan kecemasan 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Tempah Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  03-1234-5678
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Berlesen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Hari Sama</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Jaminan 100%</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Juruteknik aircond profesional"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Perkhidmatan Kami</h2>
            <p className="text-xl text-gray-600">Penyelesaian lengkap untuk keperluan aircond anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-orange-100 p-4 rounded-full w-fit mb-4">
                    <div className="text-orange-600">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-orange-600 mb-4">{service.price}</p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Ketahui Lagi</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kenapa Pilih Kami?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Berlesen</h3>
              <p className="text-gray-600">Juruteknik bertauliah dan berlesen</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Kecemasan</h3>
              <p className="text-gray-600">Sedia membantu bila-bila masa</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jaminan Puas Hati</h3>
              <p className="text-gray-600">100% jaminan kepuasan pelanggan</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Tahun</h3>
              <p className="text-gray-600">Pengalaman yang terpercaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kata Pelanggan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kawasan Perkhidmatan</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              "Kuala Lumpur",
              "Petaling Jaya",
              "Shah Alam",
              "Subang Jaya",
              "Cheras",
              "Ampang",
              "Kajang",
              "Puchong",
              "Klang",
              "Selayang",
              "Kepong",
              "Wangsa Maju",
            ].map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Aircond Rosak?</h2>
          <p className="text-xl mb-8">Hubungi kami sekarang untuk perkhidmatan pantas!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Tempah Servis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              03-1234-5678
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
