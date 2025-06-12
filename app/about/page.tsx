import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "5000+", label: "Pelanggan Puas Hati" },
    { number: "24/7", label: "Perkhidmatan Kecemasan" },
    { number: "100%", label: "Jaminan Puas Hati" },
  ]

  const team = [
    {
      name: "Ahmad Razak",
      role: "Ketua Juruteknik",
      experience: "15 tahun",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Siti Nurhaliza",
      role: "Juruteknik Kanan",
      experience: "12 tahun",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lim Chong Wei",
      role: "Pakar Pemasangan",
      experience: "10 tahun",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Tentang CoolPro</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pakar Aircond Terpercaya Sejak 2009</h1>
              <p className="text-lg text-gray-600 mb-8">
                Ditubuhkan dengan misi menyediakan perkhidmatan aircond yang boleh dipercayai untuk keluarga dan
                perniagaan di Malaysia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pasukan CoolPro"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Pasukan Pakar Kami</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-6 w-32 h-32 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                  <div className="text-sm text-gray-600">
                    <Clock className="h-4 w-4 inline mr-2" />
                    <span>{member.experience} pengalaman</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-12 w-12 text-orange-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Jaminan Perkhidmatan</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">100% Jaminan Puas Hati</h3>
                    <p className="text-gray-600">Tidak puas hati? Kami akan betulkan.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Jaminan Kerja</h3>
                    <p className="text-gray-600">Semua kerja dilindungi jaminan.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Harga Telus</h3>
                    <p className="text-gray-600">Tiada caj tersembunyi.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Berlesen & Diinsuranskan</h3>
                    <p className="text-gray-600">Sepenuhnya berlesen dan diinsuranskan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
