
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16 lg:pt-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-heading">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="rounded-full" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/80 hover:bg-secondary p-3 rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/80 hover:bg-secondary p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="bg-secondary/80 hover:bg-secondary p-3 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
}
