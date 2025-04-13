
import React, { useState } from 'react';
import { 
  Briefcase, 
  Building, 
  Calendar, 
  ChevronRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const experiences = [
  {
    id: "company1",
    company: "Tech Innovators Inc.",
    position: "Senior Developer",
    period: "Jan 2020 - Present",
    location: "San Francisco, CA",
    description: [
      "Led a team of 5 developers in building a scalable e-commerce platform using React and Node.js",
      "Improved application performance by 40% through code optimization and implementing efficient data fetching strategies",
      "Collaborated with design team to implement responsive UI components and animations",
      "Mentored junior developers and conducted code reviews to ensure code quality"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: "company2",
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    period: "Mar 2017 - Dec 2019",
    location: "Boston, MA",
    description: [
      "Developed and maintained multiple client-facing web applications using Angular and Spring Boot",
      "Implemented authentication and authorization systems using OAuth 2.0 and JWT",
      "Created reusable component libraries that reduced development time by 30%",
      "Participated in Agile development cycles and contributed to product roadmap discussions"
    ],
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"]
  },
  {
    id: "company3",
    company: "Web Crafters",
    position: "Frontend Developer",
    period: "Jun 2015 - Feb 2017",
    location: "Chicago, IL",
    description: [
      "Built responsive websites for clients across various industries",
      "Transformed design mockups into pixel-perfect web interfaces",
      "Optimized websites for maximum speed and scalability",
      "Integrated various third-party APIs for enhanced functionality"
    ],
    technologies: ["HTML/CSS", "JavaScript", "jQuery", "WordPress"]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("company1");

  return (
    <section id="experience" className="section bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          My professional journey and the companies I've had the privilege to work with.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="company1" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8 bg-transparent">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-accent"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <div className="flex items-center text-muted-foreground mt-2">
                        <Building size={18} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center md:justify-end text-muted-foreground">
                        <Calendar size={18} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center md:justify-end text-muted-foreground mt-2">
                        <Briefcase size={18} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <ChevronRight size={18} className="mr-2 text-accent mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-bold mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
