"use client"

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
        <button className="h-10 w-10 flex flex-col justify-center items-center bg-transparent border-none cursor-pointer">
          <span className="block w-6 h-0.5 bg-primary-foreground mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-primary-foreground mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-primary-foreground"></span>
        </button>
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
            href="/resources" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/resources" ? "text-primary font-semibold" : ""
            }`}
          >
            Resources
          </Link>
          <Link 
            href="/videos" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/videos" ? "text-primary font-semibold" : ""
            }`}
          >
            Videos
          </Link>
          <Link 
            href="/trafficking" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/trafficking" ? "text-primary font-semibold" : ""
            }`}
          >
            Trafficking
          </Link>
          <Link 
            href="/contact" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/contact" ? "text-primary font-semibold" : ""
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/donate" 
            onClick={handleLinkClick}
            className={`text-xl hover:text-primary transition-colors ${
              pathname === "/donate" ? "text-primary font-semibold" : ""
            }`}
          >
            Donate
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 