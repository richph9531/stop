import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FloatingMenu } from "./floating-menu";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '';
const facebook = process.env.NEXT_PUBLIC_FACEBOOK || '';
const email = process.env.NEXT_PUBLIC_EMAIL || '';

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <FloatingMenu />
            </div>
            <Link href="/" className="header-link py-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                <span className="text-red-500">S</span>tanding 
                {" "}<span className="text-red-500">T</span>ogether to
                {" "}<span className="text-red-500">O</span>ppose 
                {" "}<span className="text-red-500">P</span>ornography
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex gap-4">
            <Link href="/" className="text-primary-foreground">Home</Link>
            <Link href="/helpful-links" className="text-primary-foreground">Helpful Links</Link>
            <Link href="/video-resources" className="text-primary-foreground">Video Resources</Link>
            <Link href="/trafficking" className="text-primary-foreground">Trafficking</Link>
            <Link href="/contact" className="text-primary-foreground">Contact Us</Link>
          </div>
          <div className="flex gap-4">
            <Link href={facebook} target="_blank" className="text-primary-foreground hidden md:flex">
              <FaFacebook size={24} />
            </Link>
            <Link href={whatsapp} target="_blank" className="text-primary-foreground hidden md:flex">
              <FaWhatsapp size={24} />
            </Link>
            <Link href={`mailto:${email}`} className="text-primary-foreground hidden md:flex">
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 