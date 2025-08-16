'use client'
import { useState } from "react";
import { Menu, X, Star} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-card/95 backdrop-blur-md shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <div className="flex items-center space-x-1">
              <Star className="h-8 w-8 text-primary fill-current" />
              <Star className="h-6 w-6 text-secondary fill-current" />
              <Star className="h-4 w-4 text-accent fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary font-fredoka">
                Amazing
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Daycare</p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-xl font-medium transition-smooth hover-scale ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-primary-light hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="ml-4 gradient-primary border-0 hover-lift font-medium"
              asChild
            >
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-accordion-down">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-smooth ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary-light hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <button
                className="w-full gradient-primary border-0 font-medium"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Enroll Now
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
