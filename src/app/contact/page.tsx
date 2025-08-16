'use client'
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../compnents/ui/select'
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star,
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '../compnents/ui/card';
import { Button } from '../compnents/ui/button';
import { Input } from '../compnents/ui/input';
import { Textarea } from '../compnents/ui/textarea';
import { Label } from '../compnents/ui/label';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    startDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll contact you within 24 hours to schedule your tour.",
    });
    
    // Reset form
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      program: '',
      startDate: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254790921807",
      subtitle: "Mon-Fri 24/7",
      color: "text-primary",
      bg: "bg-primary-light"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@amzingdaycare.com",
      subtitle: "We reply within 24 hours",
      color: "text-secondary",
      bg: "bg-secondary-light"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "L Mart Street Next To Tamam",
      subtitle: "Lucky Summer, Nairobi",
      color: "text-accent",
      bg: "bg-accent-light"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Sat: 5AM-10PM (Day)",
      subtitle: "Mon-Sat: 6PM-8AM (Night Care)",
      color: "text-success",
      bg: "bg-success-light"
    }
  ];

  const reasons = [
    "Schedule a tour and meet our staff",
    "Learn about our programs and curriculum",
    "Discuss enrollment and availability",
    "Ask questions about our policies",
    "Get information about tuition and fees",
    "Explore part-time and full-time options"
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to give your child the best start in life? We&apos;d love to meet you 
            and show you why Amazing Daycare is the perfect choice.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-interactive border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className={`${info.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-fredoka">{info.title}</h3>
                  <p className="font-medium text-foreground mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="section-title text-primary mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and we&apos;ll contact you within 24 hours to 
                  schedule your personal tour and answer any questions you may have.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childName">Child&apos;s Name</Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="Your child's name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childAge">Child&apos;s Age</Label>
                    <Select onValueChange={(value) => handleSelectChange('childAge', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6weeks-12months">6 weeks - 12 months</SelectItem>
                        <SelectItem value="1-2years">1 - 2 years</SelectItem>
                        <SelectItem value="3-5years">3 - 5 years</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="program">Program Interest</Label>
                    <Select onValueChange={(value) => handleSelectChange('program', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="infant">Infant Care</SelectItem>
                        <SelectItem value="toddler">Toddler Program</SelectItem>
                        <SelectItem value="preschool">Preschool Program</SelectItem>
                        <SelectItem value="part-time">Part-time Care</SelectItem>
                        <SelectItem value="full-time">Full-time Care</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="startDate">Desired Start Date</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your child, any specific needs, or questions you have..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary border-0 hover-lift font-semibold group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by our enrollment team. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary font-fredoka">
                    Why Contact Us?
                  </h3>
                  <ul className="space-y-3">
                    {reasons.map((reason, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-card border-0">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary-light via-secondary-light to-accent-light flex items-center justify-center rounded-t-lg">
                    <div className="text-center p-8">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-bold text-primary mb-2 font-fredoka">
                        Visit Our Location
                      </h3>
                      <p className="text-muted-foreground">
                        L Mart Street Next To Tamam<br />
                        Lucky Summer, Nairobi
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-2 font-fredoka">Easy to Find</h4>
                    <p className="text-muted-foreground text-sm">
                      Located in the heart of Sunshine City with convenient parking 
                      and easy access from major roads. Look for our bright, colorful 
                      playground visible from the street!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-card border-0 text-center">
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-primary mx-auto mb-2 fill-current" />
                    <p className="text-2xl font-bold text-primary">4.9/5</p>
                    <p className="text-sm text-muted-foreground">Parent Rating</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card border-0 text-center">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-accent mx-auto mb-2 fill-current" />
                    <p className="text-2xl font-bold text-accent">200+</p>
                    <p className="text-sm text-muted-foreground">Happy Families</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fredoka">
            We Can&apos;t Wait to Meet You!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your child&apos;s bright future starts with a simple conversation. 
            Contact us today and take the first step toward exceptional early education.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">+254790921807</span>
            <span className="opacity-75">•</span>
            <span className="opacity-90">Call us now!</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;