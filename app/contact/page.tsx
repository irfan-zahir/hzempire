import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-orange-100 text-orange-800 mb-4">Hubungi Kami</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Hubungi Kami Hari Ini</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Sedia untuk tempah servis atau ada soalan? Kami sedia membantu dengan perkhidmatan pantas dan profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              03-1234-5678
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Tempah Servis</CardTitle>
                <CardDescription>Isi borang dan kami akan hubungi dalam 30 minit.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nama Pertama</Label>
                    <Input id="firstName" placeholder="Ahmad" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nama Akhir</Label>
                    <Input id="lastName" placeholder="Rahman" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nombor Telefon</Label>
                    <Input id="phone" type="tel" placeholder="012-345-6789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ahmad@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Alamat Servis</Label>
                  <Input id="address" placeholder="123 Jalan Utama, KL 50000" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Perkhidmatan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih perkhidmatan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="repair">Pembaikan</SelectItem>
                        <SelectItem value="maintenance">Penyelenggaraan</SelectItem>
                        <SelectItem value="installation">Pemasangan Baru</SelectItem>
                        <SelectItem value="emergency">Kecemasan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Kecemasan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kecemasan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Kecemasan (Segera)</SelectItem>
                        <SelectItem value="urgent">Mendesak (Hari Sama)</SelectItem>
                        <SelectItem value="soon">Tidak Lama (2 Hari)</SelectItem>
                        <SelectItem value="flexible">Fleksibel (Seminggu)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Terangkan Masalah</Label>
                  <Textarea id="message" placeholder="Terangkan masalah aircond anda..." rows={4} />
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Tempah Servis
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Maklumat Hubungan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefon</h3>
                      <p className="text-gray-600">03-1234-5678</p>
                      <p className="text-sm text-gray-500">24/7 Kecemasan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@coolpro.my</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Alamat</h3>
                      <p className="text-gray-600">123 Jalan Utama, KL 50000</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Waktu Operasi</h3>
                      <p className="text-gray-600">Isnin-Jumaat: 7 pagi - 8 malam</p>
                      <p className="text-gray-600">Sabtu-Ahad: 8 pagi - 6 petang</p>
                      <p className="text-sm text-orange-600 font-medium">Kecemasan 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-800">Perkhidmatan Kecemasan</CardTitle>
                  <CardDescription className="text-red-700">
                    Aircond rosak? Kami sedia 24/7 untuk kecemasan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                    <Phone className="mr-2 h-5 w-5" />
                    Kecemasan: 03-1234-HELP
                  </Button>
                  <p className="text-sm text-red-700 mt-3 text-center">Masa tindak balas: 30 minit</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
