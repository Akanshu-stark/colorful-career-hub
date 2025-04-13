
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A task management application with features like task creation, assignment, due dates, priority levels, and progress tracking.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Angular", "Firebase", "TypeScript", "SCSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather information, forecasts, and historical data for locations worldwide.",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    tags: ["React", "Redux", "OpenWeather API", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A dashboard for tracking and analyzing social media metrics across multiple platforms in real-time.",
    image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Vue.js", "Node.js", "D3.js", "Socket.io"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example"
  },
  {
    id: 5,
    title: "Virtual Classroom",
    description: "An online learning platform with video conferencing, screen sharing, interactive whiteboard, and course management.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    tags: ["React", "WebRTC", "Express", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example"
  },
  {
    id: 6,
    title: "Health & Fitness Tracker",
    description: "A comprehensive health and fitness tracking application with workout plans, nutrition logging, and progress analytics.",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Flutter", "Firebase", "Dart", "Material UI"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example"
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const getItemsPerPage = () => {
    if (screenWidth >= 1024) return 3;
    if (screenWidth >= 768) return 2;
    return 1;
  };
  
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - itemsPerPage : prevIndex - 1
    );
  };
  
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A selection of my recent work and personal projects.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Featured Projects</h3>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
