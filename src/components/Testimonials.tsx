
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Sachin Karale",
    role: "Associate Manager at Accenture Solutions Ltd.",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGGwiqEXgS5pw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1638386566221?e=1757548800&v=beta&t=hKwyhZvD7sH2WgfixUoWWg_BCvIGUdZbV2WZeWuSpfk",
    text: "I've had the pleasure of working with this developer, and I'm consistently impressed by his technical skills and problem-solving abilities. He is not only a talented coder but also a great communicator who understands business needs and translates them into effective solutions."
  },
  {
    id: 2,
    name: "Praveen Chaudhary",
    role: "Senior Software Engineer at Info Edge India Ltd.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9e4UBpmRiLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693154854633?e=1757548800&v=beta&t=2PzXoXfpOLncR40R2l31O9MNQMTfes02uqWegqpJkso",
    text: "Highly Recommend Akanshu Rana! A top-notch frontend developer with exceptional ML skills. His ability to seamlessly merge ML concepts with frontend projects is impressive. A collaborative team player who delivers high-quality work. An invaluable asset to any team. Hire Akanshu with confidence!"
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
