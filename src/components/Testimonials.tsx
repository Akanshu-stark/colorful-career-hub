
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    text: "I've had the pleasure of working with this developer on multiple projects, and I'm consistently impressed by their technical skills and problem-solving abilities. They're not only a talented coder but also a great communicator who understands business needs and translates them into effective solutions."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupInnovate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    text: "As a technical leader, I value developers who can not only code but also think strategically about project architecture. This developer exceeds expectations in both areas. They built a scalable system that has grown with our company, saving us countless hours and resources. Their attention to detail and commitment to best practices make them an exceptional professional."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UI/UX Designer at CreativeStudio",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    text: "Collaborating with this developer has been a designer's dream. They have an incredible ability to take design concepts and implement them with pixel-perfect accuracy. Their understanding of both design principles and technical constraints leads to smooth collaborations and outstanding results. I highly recommend them for any project that requires both technical excellence and design sensitivity."
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Project Lead at Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    text: "What sets this developer apart is their ability to handle complex projects with tight deadlines without compromising on quality. They joined our team during a critical phase and quickly became an invaluable asset. Their code is clean, well-documented, and maintainable, which has significantly reduced our technical debt. I would work with them again without hesitation."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          What others have to say about working with me.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevTestimonial}
            className="rounded-full bg-background shadow-md hover:bg-accent/10"
          >
            <ChevronLeft size={24} />
          </Button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={nextTestimonial}
            className="rounded-full bg-background shadow-md hover:bg-accent/10"
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-gradient-to-br from-background to-secondary/50 border shadow-lg">
                  <CardContent className="p-8">
                    <Quote size={48} className="text-accent/40 mb-6" />
                    <p className="text-lg mb-8 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === activeIndex 
                  ? "bg-accent w-6" 
                  : "bg-accent/30 hover:bg-accent/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
