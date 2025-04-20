
import React from 'react';
import { BadgeCheck, BookOpen, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-accent" />,
      title: "Continuous Learner",
      description: "Always looking to expand my knowledge and stay updated with the latest technologies."
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Team Player",
      description: "Excellent communication skills and ability to work effectively in cross-functional teams."
    },
    {
      icon: <Rocket className="w-10 h-10 text-accent" />,
      title: "Problem Solver",
      description: "Analytical thinker who loves tackling complex challenges with creative solutions."
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-accent" />,
      title: "Detail Oriented",
      description: "Committed to producing high-quality, well-tested, and maintainable code."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate Data Engineer skilled in building scalable pipelines and delivering data-driven insights. 
          Here's a bit more about who I am and what drives me.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">My Journey</h3>
          <p className="text-muted-foreground mb-4">
            I began my data engineering journey around 1 year ago, 
            starting with strong fundamentals in programming and gradually 
            expanding into building robust data pipelines and cloud-based solutions.
          </p>
          <p className="text-muted-foreground mb-4">
            In this time, I've worked with cross-functional teams on data-driven projects using tools
            like Azure Data Factory, Azure Databricks, PySpark, SQL, and Python. 
            These experiences have sharpened my ability to design scalable, efficient data workflows.
          </p>
          <p className="text-muted-foreground">
            I'm driven by a passion for turning raw data into meaningful insights 
            and building reliable systems that support informed decision-making and business growth.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
            alt="Coding on laptop" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-accent/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
