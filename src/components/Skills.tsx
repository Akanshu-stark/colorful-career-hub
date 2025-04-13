
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Database, 
  Globe, 
  Layers, 
  Server, 
  Settings, 
  Tool
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 82 },
        { name: "TypeScript", level: 78 },
        { name: "Next.js", level: 75 }
      ]
    },
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "PHP", level: 65 }
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 78 },
        { name: "Firebase", level: 75 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      icon: <Layers className="w-6 h-6 text-accent" />,
      title: "DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 72 },
        { name: "CI/CD", level: 70 },
        { name: "Kubernetes", level: 60 }
      ]
    },
    {
      icon: <Tool className="w-6 h-6 text-accent" />,
      title: "Tools",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Jira", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Jenkins", level: 65 }
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-accent" />,
      title: "Others",
      skills: [
        { name: "REST API", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Testing", level: 80 },
        { name: "Agile", level: 85 },
        { name: "UI/UX", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and proficiencies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
