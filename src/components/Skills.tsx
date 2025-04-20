
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Database, 
  Cloud, 
  Library, 
  Wrench,
  Code, 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 90 },
        { name: "SQL", level: 95 },
        { name: "Unix(Shell Scripting)", level: 85 },
      ]
    },
    {
      icon: <Library className="w-6 h-6 text-accent" />,
      title: "Libraries & Frameworks",
      skills: [
        { name: "PySpark", level: 88 },
        { name: "Pandas", level: 85 },
        { name: "Hadoop", level: 75 },
        { name: "Numpy", level: 70 }
      ]
    },
    {
      icon: <Cloud className="w-6 h-6 text-accent" />,
      title: "Cloud",
      skills: [
        { name: "Azure", level: 95 },
        { name: "Azure Data Factory", level: 85 },
        { name: "Azure Databricks", level: 90 },
        { name: "Azure Synapse", level: 80 },
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 78 },
        { name: "Firebase", level: 75 },
      ]
    },
    {
      icon: <Wrench className="w-6 h-6 text-accent" />,
      title: "Tools",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Jira", level: 85 },
        { name: "Git", level: 90 },
        { name: "Jenkins", level: 65 }
      ]
    },
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
