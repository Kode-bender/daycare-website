'use client'
import { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Camera, Heart, Star } from 'lucide-react';
import { Button } from '../compnents/ui/button';
import Link from 'next/link';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // For demo purposes, I'll create placeholder gallery items
  // In a real app, these would be actual photos
  const galleryItems = [
    {
      id: 1,
      category: 'classroom',
      title: 'Circle Time Learning',
      description: 'Children engaged in interactive learning during morning circle time',
      alt: 'Children sitting in a circle during learning time at daycare'
    },
    {
      id: 2,
      category: 'outdoor',
      title: 'Playground Adventures',
      description: 'Safe outdoor play area with climbing structures and sandbox',
      alt: 'Children playing on playground equipment outdoors'
    },
    {
      id: 3,
      category: 'activities',
      title: 'Art & Creativity',
      description: 'Little artists creating masterpieces with colorful paints',
      alt: 'Children doing art activities with paints and brushes'
    },
    {
      id: 4,
      category: 'meals',
      title: 'Healthy Lunch Time',
      description: 'Nutritious meals prepared fresh daily for growing children',
      alt: 'Children eating healthy meals at daycare'
    },
    {
      id: 5,
      category: 'classroom',
      title: 'Reading Corner',
      description: 'Cozy reading nook where stories come to life',
      alt: 'Comfortable reading area with books and soft seating'
    },
    {
      id: 6,
      category: 'activities',
      title: 'Music & Movement',
      description: 'Dance and music time with instruments and songs',
      alt: 'Children participating in music and movement activities'
    },
    {
      id: 7,
      category: 'outdoor',
      title: 'Garden Exploration',
      description: 'Learning about nature in our educational garden',
      alt: 'Children exploring and learning in the daycare garden'
    },
    {
      id: 8,
      category: 'activities',
      title: 'Science Discovery',
      description: 'Hands-on experiments that spark curiosity and learning',
      alt: 'Children doing simple science experiments'
    },
    {
      id: 9,
      category: 'classroom',
      title: 'Building & Construction',
      description: 'Developing fine motor skills with blocks and building toys',
      alt: 'Children building with blocks and construction toys'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'classroom', name: 'Classroom', icon: Star },
    { id: 'outdoor', name: 'Outdoor Play', icon: Heart },
    { id: 'activities', name: 'Activities', icon: Star },
    { id: 'meals', name: 'Meal Time', icon: Heart }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Take a peek into our daily adventures and see the joy, learning, 
            and growth happening at Bright Little Stars every day.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-smooth hover-scale ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover cursor-pointer transition-smooth"
                onClick={() => openLightbox(index)}
              >
                {/* Placeholder for actual images */}
                <div className="aspect-square bg-gradient-to-br from-primary-light via-secondary-light to-accent-light flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="h-12 w-12 text-primary mx-auto mb-4 opacity-50" />
                    <h3 className="font-semibold text-primary mb-2 font-fredoka">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2 text-muted-foreground">
                No photos found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category to view more photos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            {selectedImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}
            
            {selectedImage < filteredItems.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 transition-colors"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-light via-secondary-light to-accent-light flex items-center justify-center p-12">
                <div className="text-center">
                  <Camera className="h-20 w-20 text-primary mx-auto mb-6 opacity-50" />
                  <h2 className="text-2xl font-bold text-primary mb-4 font-fredoka">
                    {filteredItems[selectedImage].title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
              
              {/* Image Info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-primary font-fredoka">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Camera className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fredoka">
            See It All in Person
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Pictures only tell part of the story. Visit us for a tour and experience 
            the warmth and joy of Bright Little Stars firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover-lift font-semibold group bg-white text-black hover:bg-primary-light"
              asChild
            >
              <Link href="/contact">
                Schedule Your Visit
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

export default Gallery;