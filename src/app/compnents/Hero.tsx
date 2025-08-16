import { Star, Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '../assets/daycare-hero.jpeg';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="h-16 w-16 text-primary fill-current" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-300">
          <Heart className="h-12 w-12 text-accent fill-current" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-700">
          <Sparkles className="h-14 w-14 text-secondary fill-current" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full text-accent-foreground font-medium">
                <Shield className="h-4 w-4" />
                <span>Licensed & Trusted Since 2021</span>
              </div>
              
              <h1 className="hero-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Where Little
                <span className="block text-accent">Stars Shine</span>
                <span className="block text-primary">Brightest</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Nurturing care, exceptional early education, and endless fun in a safe, 
                loving environment where your child&apos;s potential truly sparkles.
              </p>
            </div>

            {/* Safety Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "Licensed & Insured", color: "text-success" },
                { icon: Heart, text: "Experienced Staff", color: "text-accent" },
                { icon: Star, text: "Award Winning", color: "text-primary" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-card/50 px-4 py-3 rounded-xl">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary border-0 hover-lift font-semibold group"
                asChild
              >
                <Link href="/contact">
                  Enroll Your Child Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover-scale font-semibold"
                asChild
              >
                <Link href="/programs">
                  Explore Programs
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">Trusted by over 200 families</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
                <span className="ml-2 text-sm font-medium">4.9/5 parent satisfaction</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={heroImage}
                width={150}
                height={150}
                alt="Happy children playing at Bright Little Stars Daycare"
                className="rounded-3xl shadow-hover w-full h-auto"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-medium max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="bg-success/20 p-3 rounded-full">
                    <Star className="h-6 w-6 text-success fill-current" />
                  </div>
                  <div>
                    <p className="font-semibold text-success">Ages 6 months - 15 years</p>
                    <p className="text-sm text-muted-foreground">Full & Part-time care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;