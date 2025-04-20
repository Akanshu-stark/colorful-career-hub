
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
    company: "Infosys Ltd.",
    position: "Data Engineer",
    period: "Nov 2024 - Present",
    location: "Chandigarh, India ",
    description: [
      "Designed and implemented ETL pipelines using Apache Spark and Azure Data Factory, improving data processing efficiency by 30%.",
      "Developed data models and optimized SQL queries for large datasets, reducing query execution time by 25%.",
      "Performed extensive data cleaning on datasets using Azure Data Factory by using different operations, including modifying specific values, handling missing values, and standardizing formats and many more.",
      "Transformation the data into required format and applied business conditions and generated the output file to share the data using Pyspark and SQL.",
      "Designed and automated the pipeline to run at scheduled times, ensuring seamless data processing without manual intervention.",
      "Integrated Azure Databricks notebooks using PySpark, SQL to perform complex analysis using Azure Data Factory.",
      "Collaborated with cross-functional teams to gather requirements and deliver data solutions that meet business needs.",
    ],
    technologies: ["Spark", "SQL", "Python", "Azure Data Factory", "Azure Databricks"]
  },
  {
    id: "company2",
    company: "Accenture Solutions Pvt. Ltd.",
    position: "Associate Software Engineer",
    period: "Oct 2023 - Nov 2024",
    location: "Pune, India",
    description: [
      "Developed and updated automated workflows in Salesforce to simplify and accelerate sales processes, improving lead management and customer follow-ups.",
      "Utilized SQL to write queries that pulled important data from various sources, helping the team analyze sales campaigns and identify potential customers.",
      "Worked closely with sales, marketing, and IT teams to ensure alignment and effective communication, driving the success of the project.",
      "Leveraged data analysis to provide actionable insights into the success of sales campaigns and customer trends, improving targeting and strategy.",
      "Participated in Agile development cycles and contributed to product roadmap discussions"
    ],
    technologies: ["Salesforce", "Python", "SQL", "Apex"]
  },
  {
    id: "company3",
    company: "India Today Group",
    position: "Software Engineer Intern",
    period: "April 2023 - July 2023",
    location: "Noida, India",
    description: [
      "Developed a web application for real-time news updates using React.js and Node.js",
      "Assisted in building and optimizing the crimetak.in news website by enhancing UI, addressing bugs, and reducing page load latency by 30%, leading to a smoother user experience.",
      "Improved website security by securing APIs, which increased protection against potential attacks and reduced vulnerability incidents by 40%.",
      "Collaborated with the design team to create a user-friendly interface and improve user experience",
      "Optimized websites for maximum speed and scalability",
    ],
    technologies: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB"]
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
          <div className="sm: pb-14">
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
          </div>
          
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
