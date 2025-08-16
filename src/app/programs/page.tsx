
import { 
  Baby, 
  Users, 
  BookOpen, 
  Palette,
  Music,
  Activity,
  Star,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '../compnents/ui/card';
import { Button } from '../compnents/ui/button';
import Link from 'next/link';

const Programs = () => {
  const programs = [
    {
      title: "Infant Care",
      age: "6 weeks - 12 months",
      ratio: "1:4 ratio",
      icon: Baby,
      color: "text-accent",
      bg: "bg-accent-light",
      description: "Gentle, individualized care for your precious little one with focus on bonding, development, and establishing routines.",
      features: [
        "Individual feeding and sleeping schedules",
        "Daily milestone tracking and reports",
        "Sensory exploration activities",
        "Tummy time and motor skill development",
        "Soothing environment with soft music",
        "Parent communication app updates"
      ],
      activities: [
        "Sensory play with textures and sounds",
        "Story time and gentle songs",
        "Outdoor stroller walks (weather permitting)",
        "Peek-a-boo and simple games"
      ],
      schedule: {
        "7:00 - 8:00": "Arrival and quiet play",
        "8:00 - 9:00": "Breakfast/bottles",
        "9:00 - 10:00": "Activity time",
        "10:00 - 11:30": "Morning nap",
        "11:30 - 12:30": "Lunch/bottles",
        "12:30 - 2:30": "Afternoon nap",
        "2:30 - 4:00": "Play and interaction",
        "4:00 - 6:00": "Evening care and pickup"
      }
    },
    {
      title: "Toddler Program",
      age: "1 - 2 years",
      ratio: "1:6 ratio",
      icon: Users,
      color: "text-secondary",
      bg: "bg-secondary-light",
      description: "Active learning through exploration, discovery, and beginning social interactions with age-appropriate challenges.",
      features: [
        "Language development activities",
        "Potty training support and encouragement",
        "Creative art and sensory experiences",
        "Beginning social skills and sharing",
        "Outdoor play and physical development",
        "Nutritious meals and snacks"
      ],
      activities: [
        "Water play and sand exploration",
        "Music and movement sessions",
        "Simple crafts and finger painting",
        "Block building and stacking games",
        "Nature walks and playground time"
      ],
      schedule: {
        "7:00 - 8:30": "Arrival and free play",
        "8:30 - 9:00": "Breakfast together",
        "9:00 - 10:00": "Circle time and learning",
        "10:00 - 11:30": "Active play and exploration",
        "11:30 - 12:00": "Lunch time",
        "12:00 - 2:00": "Quiet time and nap",
        "2:00 - 4:00": "Art and creative activities",
        "4:00 - 6:00": "Outdoor play and pickup"
      }
    },
    {
      title: "Preschool Program",
      age: "3 - 5 years",
      ratio: "1:10 ratio",
      icon: BookOpen,
      color: "text-primary",
      bg: "bg-primary-light",
      description: "Comprehensive school readiness program that builds academic, social, and emotional skills for kindergarten success.",
      features: [
        "Pre-literacy and math concepts",
        "STEAM activities and experiments",
        "Social-emotional learning curriculum",
        "Field trips and special events",
        "Kindergarten preparation activities",
        "Character education and values"
      ],
      activities: [
        "Letter and number recognition games",
        "Science experiments and discovery",
        "Dramatic play and storytelling",
        "Art projects and creative expression",
        "Team games and group activities",
        "Computer skills and digital literacy"
      ],
      schedule: {
        "7:00 - 8:30": "Arrival and centers",
        "8:30 - 9:00": "Morning meeting",
        "9:00 - 10:30": "Academic learning blocks",
        "10:30 - 11:00": "Snack and outdoor play",
        "11:00 - 12:00": "Creative arts and STEAM",
        "12:00 - 1:00": "Lunch and social time",
        "1:00 - 2:00": "Quiet activities/rest",
        "2:00 - 4:00": "Project time and enrichment",
        "4:00 - 6:00": "Free play and pickup"
      }
    }
  ];

  const enrichmentPrograms = [
    {
      title: "Music & Movement",
      icon: Music,
      description: "Weekly music classes with singing, dancing, and rhythm instruments",
      ages: "All ages"
    },
    {
      title: "Art Expression",
      icon: Palette,
      description: "Creative art projects that develop fine motor skills and creativity",
      ages: "18 months+"
    },
    {
      title: "Physical Fitness",
      icon: Activity,
      description: "Fun fitness activities that build coordination and healthy habits",
      ages: "2 years+"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text text-primary mb-6">
            Age-Appropriate Programs
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Carefully designed programs that grow with your child, providing the perfect 
            balance of learning, play, and development at every stage.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="shadow-hover border-0">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`${program.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                          <program.icon className={`h-8 w-8 ${program.color}`} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-1 text-primary font-fredoka">
                            {program.title}
                          </h2>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="bg-primary-light px-3 py-1 rounded-full text-primary font-medium">
                              {program.age}
                            </span>
                            <span className="text-muted-foreground">{program.ratio}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-3 font-fredoka text-primary">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {program.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="shadow-card border-0">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 font-fredoka text-secondary flex items-center">
                        <Activity className="h-5 w-5 mr-2" />
                        Daily Activities
                      </h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-center space-x-2">
                            <Star className="h-3 w-3 text-accent fill-current" />
                            <span className="text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card border-0">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 font-fredoka text-secondary flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Daily Schedule
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(program.schedule).map(([time, activity]) => (
                          <div key={time} className="flex items-start space-x-3 text-sm">
                            <span className="font-medium text-primary min-w-[80px]">{time}</span>
                            <span className="text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">
              Enrichment Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Additional activities that enhance our core curriculum and provide 
              well-rounded development opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enrichmentPrograms.map((program, index) => (
              <Card key={index} className="card-interactive border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="bg-primary-light w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-fredoka">{program.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                  <div className="bg-secondary-light px-3 py-1 rounded-full text-secondary font-medium text-sm inline-block">
                    {program.ages}
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
            Ready to Enroll Your Child?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Give your child the gift of exceptional early education. Contact us today 
            to schedule a tour and see our programs in action!
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
              <Link href="/about">
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;