import { 
  Heart, 
  Star, 
  Users, 
  Award,
  BookOpen,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '../compnents/ui/card';
import Link from 'next/link';
import { Button } from '../compnents/ui/button';

const About = () => {
  const staff = [
    {
      name: "Sarah Johnson",
      role: "Director & Lead Educator",
      education: "M.Ed in Early Childhood Education",
      experience: "15+ years",
      description: "Passionate about creating nurturing environments where every child can thrive and reach their full potential.",
      specialties: ["Curriculum Development", "Child Psychology", "Parent Communication"]
    },
    {
      name: "Maria Rodriguez",
      role: "Infant Care Specialist",
      education: "B.A. Child Development",
      experience: "12+ years",
      description: "Expert in infant care with a gentle approach to supporting the youngest learners and their families.",
      specialties: ["Infant Development", "Feeding Support", "Sleep Training"]
    },
    {
      name: "Emily Chen",
      role: "Preschool Teacher",
      education: "B.Ed Elementary Education",
      experience: "8+ years",
      description: "Creative educator who makes learning fun through hands-on activities and imaginative play.",
      specialties: ["STEAM Activities", "Art & Music", "School Readiness"]
    },
    {
      name: "David Thompson",
      role: "Physical Education Coach",
      education: "B.S. Kinesiology",
      experience: "10+ years",
      description: "Brings energy and movement to our program, helping children develop gross motor skills and healthy habits.",
      specialties: ["Motor Development", "Team Building", "Outdoor Activities"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Every child deserves to feel loved, valued, and emotionally secure in our care.",
      color: "text-accent",
      bg: "bg-accent-light"
    },
    {
      icon: Star,
      title: "Excellence in Education",
      description: "We provide high-quality early childhood education that prepares children for lifelong learning.",
      color: "text-primary",
      bg: "bg-primary-light"
    },
    {
      icon: Users,
      title: "Family Partnership",
      description: "We work closely with families to support each child's unique needs and development.",
      color: "text-secondary",
      bg: "bg-secondary-light"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Maintaining the highest standards of safety and security is our top priority.",
      color: "text-success",
      bg: "bg-success-light"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text text-primary mb-6">
            About Amazing Daycare
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            For over 4 years, we&apos;ve been nurturing young minds and hearts, 
            creating a foundation for lifelong learning and happiness.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Amazing Daycare Daycare, our mission is to provide exceptional early childhood 
                education and care in a safe, nurturing environment. We believe every child is unique 
                and deserves individualized attention to help them develop socially, emotionally, 
                physically, and academically.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2021 by experienced educators, we&apos;ve grown from a small family daycare 
                to a trusted community cornerstone, serving over 200 families and helping countless 
                children prepare for their educational journey.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-light rounded-xl">
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Families Served</p>
                </div>
                <div className="text-center p-4 bg-secondary-light rounded-xl">
                  <p className="text-3xl font-bold text-secondary">4+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-fredoka">Licensed & Accredited</h3>
                <p className="text-muted-foreground">
                  State licensed facility meeting all health and safety requirements with regular inspections.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <BookOpen className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-fredoka">Educational Excellence</h3>
                <p className="text-muted-foreground">
                  Research-based curriculum designed to prepare children for academic success.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <Clock className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-fredoka">Flexible Care</h3>
                <p className="text-muted-foreground">
                  Full-time, part-time, and extended hour options to meet your family&apos;s needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These fundamental beliefs guide everything we do and shape the nurturing 
              environment we create for your children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-interactive border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className={`${value.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-fredoka">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Meet Our Amazing Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated educators and caregivers bring passion, expertise, and love 
              to their work every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="card-interactive border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-1 text-primary font-fredoka">
                        {member.name}
                      </h3>
                      <p className="text-secondary font-medium mb-2">{member.role}</p>
                      <div className="text-sm text-muted-foreground mb-3 space-y-1">
                        <p><strong>Education:</strong> {member.education}</p>
                        <p><strong>Experience:</strong> {member.experience}</p>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span 
                            key={specialtyIndex}
                            className="bg-accent-light text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fredoka">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a tour and meet the caring educators who will help your child shine bright!
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

export default About;