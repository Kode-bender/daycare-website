import { Star, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover-scale">
              <div className="flex items-center space-x-1">
                <Star className="h-8 w-8 text-accent fill-current" />
                <Star className="h-6 w-6 text-secondary fill-current" />
                <Star className="h-4 w-4 text-primary-light fill-current" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-fredoka">
                  Amazing
                </h2>
                <p className="text-sm opacity-80 -mt-1">Daycare</p>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Nurturing young minds with love, care, and exceptional early childhood education. 
              Where every child shines bright like a star.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover-scale cursor-pointer opacity-80 hover:opacity-100" />
              <Instagram className="h-5 w-5 hover-scale cursor-pointer opacity-80 hover:opacity-100" />
              <Twitter className="h-5 w-5 hover-scale cursor-pointer opacity-80 hover:opacity-100" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-fredoka">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className="opacity-80 hover:opacity-100 transition-smooth hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-fredoka">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 opacity-80" />
                <div>
                  <p className="opacity-90">+254790921807</p>
                  <p className="text-xs opacity-70">Mon-Fri 5AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 opacity-80" />
                <div>
                  <p className="opacity-90">hello@brightlittlestars.com</p>
                  <p className="text-xs opacity-70">We reply within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 opacity-80" />
                <div>
                  <p className="opacity-90">L Mart Street Next To Tamam</p>
                  <p className="opacity-90">Lucky Summer, Nairobi</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-fredoka">Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 opacity-80" />
                <span className="opacity-90">Operating Hours</span>
              </div>
              <ul className="space-y-1 ml-6 opacity-80">
                <li>Monday - Friday: 5:00 AM - 10:30 PM</li>
                <li>Monday - Friday: 6:00 PM - 8:00 AM</li>
              </ul>
              <div className="mt-4 p-3 bg-primary-light/20 rounded-lg">
                <p className="text-xs opacity-90">
                  Extended hours available for working parents. 
                  Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Bright Little Stars Daycare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link href="/privacy" className="hover:opacity-100 transition-smooth">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-smooth">
                Terms of Service
              </Link>
              <Link href="/enrollment" className="hover:opacity-100 transition-smooth">
                Enrollment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;