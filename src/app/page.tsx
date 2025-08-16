
import { 
  Users, 
  BookOpen, 
  Shield, 
  Clock, 
  Heart, 
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';
import Hero from './compnents/Hero';
import { Card, CardContent } from './compnents/ui/card';
import { Button } from './compnents/ui/button';
import Link from 'next/link';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Early Learning Programs",
      description: "Age-appropriate curriculum that builds foundation skills through play-based learning and discovery.",
      color: "text-primary",
      bg: "bg-primary-light"
    },
    {
      icon: Users,
      title: "Experienced Caregivers",
      description: "Trained professionals who provide nurturing care with low child-to-staff ratios for individual attention.",
      color: "text-secondary",
      bg: "bg-secondary-light"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure facilities with background-checked staff, health monitoring, and emergency protocols.",
      color: "text-success",
      bg: "bg-success-light"
    },
    {
      icon: Heart,
      title: "Nutritious Meals",
      description: "Fresh, healthy meals and snacks prepared daily to support growing bodies and developing minds.",
      color: "text-accent",
      bg: "bg-accent-light"
    }
  ];

  const programs = [
    {
      title: "Infant Care",
      age: "6 weeks - 12 months",
      description: "Gentle, loving care for your littlest ones with feeding, nap schedules, and sensory activities.",
      features: ["Individual schedules", "Milestone tracking", "Daily reports"]
    },
    {
      title: "Toddler Program",
      age: "1 - 2 years",
      description: "Active learning through exploration, music, art, and beginning social skills development.",
      features: ["Potty training support", "Language development", "Creative play"]
    },
    {
      title: "Preschool",
      age: "3 - 5 years",
      description: "School readiness preparation with letters, numbers, and social skills in a fun environment.",
      features: ["Kindergarten prep", "STEAM activities", "Field trips"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">
              Why Parents Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide more than just childcare - we create a nurturing second home where 
              your child can learn, grow, and thrive with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-interactive border-0 shadow-card hover:shadow-hover">
                <CardContent className="p-6 text-center">
                  <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-fredoka">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">
              Age-Appropriate Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each program is carefully designed to meet the developmental needs and 
              milestones of children at every stage of their early years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="card-interactive border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center bg-primary-light px-4 py-2 rounded-full text-primary font-medium text-sm mb-4">
                      {program.age}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary font-fredoka">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success fill-current" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="gradient-secondary border-0 hover-lift font-semibold group"
              asChild
            >
              <Link href="/programs">
                Learn More About Our Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Schedule Preview */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-primary mb-6">
                A Day Full of Learning & Fun
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our structured yet flexible daily schedule ensures your child experiences 
                a perfect balance of education, play, rest, and nutritious meals.
              </p>
              
              <div className="space-y-4">
                {[
                  { time: "7:00 AM", activity: "Arrival & Free Play", icon: Sparkles },
                  { time: "9:00 AM", activity: "Circle Time & Learning", icon: BookOpen },
                  { time: "11:30 AM", activity: "Nutritious Lunch", icon: Heart },
                  { time: "1:00 PM", activity: "Quiet Time & Nap", icon: Clock },
                  { time: "3:30 PM", activity: "Creative Activities", icon: Sparkles },
                  { time: "5:30 PM", activity: "Pick-up & Family Time", icon: Users }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-card/70 p-4 rounded-xl">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{item.time}</p>
                      <p className="text-sm text-muted-foreground">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card/80 p-8 rounded-3xl shadow-hover">
                <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-fredoka text-primary">
                  Flexible Hours
                </h3>
                <p className="text-muted-foreground mb-6">
                  We understand working parents need flexibility. Our extended hours 
                  and part-time options fit your family's schedule.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <p className="font-semibold">Day Care</p>
                    <p>5:00 AM - 10:30 PM</p>
                  </div>
                  <div className="bg-secondary-light p-3 rounded-lg">
                    <p className="font-semibold">Night Care</p>
                    <p>6:00 PM - 8:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fredoka">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Give your child the gift of exceptional early education and care. 
            Schedule a tour today and see why families love Amazing Daycare!
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
              <Link href="/gallery">
                View Our Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;