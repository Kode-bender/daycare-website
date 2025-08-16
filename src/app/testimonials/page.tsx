'use client'
import { useState, useEffect } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Quote,
  Users,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '../compnents/ui/card';
import Link from 'next/link';
import { Button } from '../compnents/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mother of Emma (4 years old)",
      rating: 5,
      text: "Amazing Daycare has been incredible for Emma's development. She's learned so much and comes home excited every day talking about her friends and activities. The staff truly cares about each child individually.",
      highlight: "Emma has blossomed into a confident, curious learner"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Father of twins Alex & Maya (3 years old)",
      rating: 5,
      text: "As a working parent, I need to trust that my children are in good hands. The daily updates, nutritious meals, and structured learning have exceeded all expectations. Both twins love going to 'school' every morning!",
      highlight: "Daily updates give me peace of mind"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Mother of Lucas (2 years old)",
      rating: 5,
      text: "The potty training support and patience from the teachers has been amazing. Lucas was struggling at home, but within weeks at Amazing Daycare, he made incredible progress. They truly understand child development.",
      highlight: "Professional support made all the difference"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Father of Sophie (5 years old)",
      rating: 5,
      text: "Sophie started kindergarten this year completely prepared thanks to Amazing Daycare. Her reading, writing, and social skills gave her such confidence. We couldn't be happier with our choice!",
      highlight: "Sophie was completely ready for kindergarten"
    },
    {
      id: 5,
      name: "Amanda Williams",
      role: "Mother of baby Ethan (8 months old)",
      rating: 5,
      text: "Choosing infant care was so stressful, but the loving attention Ethan receives makes my heart happy. The daily reports with photos let me feel connected even when I'm at work. He's thriving here!",
      highlight: "Loving infant care that feels like family"
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Father of Zoe (3 years old)",
      rating: 5,
      text: "The art projects, science experiments, and outdoor activities keep Zoe engaged and learning. She's developed such creativity and curiosity. The teachers really go above and beyond every single day.",
      highlight: "Rich curriculum that sparks creativity"
    }
  ];

  const stats = [
    {
      number: "4.9/5",
      label: "Parent Satisfaction",
      icon: Star
    },
    {
      number: "200+",
      label: "Happy Families",
      icon: Users
    },
    {
      number: "4+",
      label: "Years of Excellence",
      icon: Heart
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text text-primary mb-6">
            What Parents Say
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it - hear from the families who trust us 
            with their most precious little ones every day.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-light w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary fill-current" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 font-fredoka">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">
              Parent Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from real families who have chosen Bright Little Stars 
              for their children&apos;s early education and care.
            </p>
          </div>

          <div className="relative">
            <Card className="shadow-hover border-0 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  <blockquote className="text-2xl md:text-3xl leading-relaxed text-foreground mb-8 font-medium">
                    &apos;{testimonials[currentTestimonial].text}&apos;
                  </blockquote>
                  
                  <div className="bg-accent-light p-4 rounded-xl mb-8 max-w-2xl mx-auto">
                    <p className="text-accent-foreground font-medium">
                      &apos;{testimonials[currentTestimonial].highlight}&apos;
                    </p>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <div>
                    <p className="text-xl font-semibold text-primary font-fredoka">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-smooth hover-scale"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-smooth ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-muted hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-smooth hover-scale"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">
              More Happy Families
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every family has a unique story, but they all share one thing in common - 
              their children are thriving at Bright Little Stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-interactive border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    &apos;{testimonial.text}&apos;
                  </blockquote>
                  
                  <div className="bg-primary-light p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-primary text-center">
                      &apos;{testimonial.highlight}&apos;
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="font-semibold text-primary font-fredoka">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fredoka">
            Join Our Happy Family
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to give your child the same amazing experience? Schedule a tour today 
            and see why so many families choose Bright Little Stars.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover-lift font-semibold group bg-white text-black hover:bg-primary-light"
              asChild
            >
              <Link href="/contact">
                Schedule a Tour
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary hover-scale font-semibold"
              asChild
            >
              <Link href="/programs">
                View Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;