
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Regional Sales Insights Pipeline",
    description: "This project was to automate the process of cleaning, integrating, and analyzing customer data from multiple regions to generate actionable insights that support business decision-making",
    image: "data:image/jpeg;base64,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",
    tags: ["PySpark", "SQL", "Azure Databricks", "Azure Data Factory", "Python"],
  },
  {
    id: 2,
    title: "Credit Card Fraud Detection",
    description: "Developed a machine learning model for fraud detection using clustering and classification algorithms to identify suspicious transaction patterns. This app accurately flagged potential fraud, enhancing financial security and decision-making.",
    image: "https://repository-images.githubusercontent.com/504123019/4c3ef7a3-7fcc-4b5b-8383-d68ab3eb9f0e",
    tags: ["Python", "Pandas", "Numpy", "Sklearn","Seaborn", "Matplotlib"],
    githubLink: "https://github.com/Akanshu-stark/Credit_Card_Fraud_Detection/tree/main"
  },
  {
    id: 3,
    title: "Career Connect",
    description: "Career Connect is a job listing app built with React.js. It provides a intuitive platform for users to discover job opportunities and connect with potential employers. The application features a user-friendly interface, allowing users to search for jobs, view detailed listings, and apply directly through the platform.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/source/9cf45875471191.5c4df6c4227b4.jpg",
    tags: ["React.js", "Redux", "Firebase", "JavaScript", "HTML/CSS"],
    liveLink: "https://job-listing-app-fb704.web.app/",
    githubLink: "https://github.com/Akanshu-stark/Career-Connect"
  },
  {
    id: 4,
    title: "Scrapie News",
    description: "Scrapie News is a web application that provides real-time news results to its users. With an intuitive user interface and seamless navigation, users can stay updated with the latest news from various categories. The application fetches news data using the NewsAPI.org API, allowing users to access a wide range of news articles.",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/30881/image-upload/SwiftUI%20-%20iOS%20WordPress%20App-intro.jpg",
    tags: ["React.js", "HTML/CSS", "Bootstrap", "NewsAPI.org", "JavaScript"],
    liveLink: "https://www.youtube.com/watch?v=Nqy60s7pSyA",
    githubLink: "https://github.com/Akanshu-stark/Scrapie-News/tree/development"
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
                {project.githubLink && <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button> }
                {project?.liveLink && <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
