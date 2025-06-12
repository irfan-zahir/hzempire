import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navigation = [
    { name: "Utama", href: "/" },
    { name: "Perkhidmatan", href: "/services" },
    { name: "Tentang", href: "/about" },
    { name: "Galeri", href: "/work-gallery" },
    { name: "Hubungi", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <div className="text-white font-bold text-xl">AC</div>
            </div>
            <span className="text-xl font-bold text-gray-900">CoolPro</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-orange-600" />
              <span className="font-semibold">03-1234-5678</span>
            </div>
            <Button className="hidden md:flex bg-orange-600 hover:bg-orange-700">Tempah</Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-orange-600 font-medium text-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-orange-600 hover:bg-orange-700 mt-4">Tempah</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
