"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function FloatingMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-16 w-16 hover:bg-primary-foreground/10"
        >
          <Menu className="h-12 w-12 stroke-[3]" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation menu for accessing different sections of the website
        </SheetDescription>
        <nav className="flex flex-col space-y-6 mt-8">
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/" ? "text-primary font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link 
            href="/helpful-links" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/helpful-links" ? "text-primary font-semibold" : ""
            }`}
          >
            Helpful Links
          </Link>
          <Link 
            href="/video-resources" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/video-resources" ? "text-primary font-semibold" : ""
            }`}
          >
            Video Resources
          </Link>
          <Link 
            href="/contact" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/contact" ? "text-primary font-semibold" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 