import React from "react";
import { Github, ExternalLink } from "lucide-react";
import olova from "../assets/images/olova.png";
import olova1 from "../assets/images/olova1.png";
import olova2 from "../assets/images/olova2.png";
import olova3 from "../assets/images/olova3.png";
import olova4 from "../assets/images/olova4.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Complete Medical Diagnosis",
      description:
        "Medical Diagnosis is a web development project that consists of 9 different disease predictions.",
      tags: ["JavaScript", "Python", "SCSS"],
      links: {
        github: "https://github.com/AishwaryaBCU/BCU-Diseases/tree/main",
        demo: "https://bcu-diseases.vercel.app/",
      },
      image: olova,
      featured: true,
    },
    // Add other project objects as needed
    {
      title: "Design-a-Portfolio-Gallery-using-jQuery",
      description:
        "This repository contains a simple and interactive Portfolio Gallery designed using jQuery.",
      tags: ["JavaScript", "jQuery", "CSS"],
      links: {
        github: "https://github.com/AISHWARYAAU/Design-a-Portfolio-Gallery-using-jQuery",
      },
      image: olova1,
      featured: true,
    },
    {
      title: "NewsFeed: An Android Application",
      description:
        "GuardianNews is an Android Application which allows users to view various newspaper articles from the popular British daily newspaper company 'The Guardian'. The application makes calls to the official 'The Guardian' API and parses the retrieved JSON responses to deliver the various newspaper articles.",
      tags: ["JSON", "Android Studio", "Java", "Gradle"],
      links: {
        github: "https://github.com/AishwaryaBCU/Newsfeed/tree/main",
      },
      image: olova2,
      featured: true,
    },
    {
      title: "To-Do List Using MEAN",
      description:
        "This repository contains a simple ToDo application built using the MEAN stack, which stands for MongoDB, Express.js, Angular, and Node.js. This project serves as a beginner-friendly guide to understanding and implementing a full-stack web application using the MEAN stack.",
      tags: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript", "Bootstrap"],
      links: {
        github: "https://github.com/AISHWARYAAU/todo_list",
      },
      image: olova3,
      featured: true,
    },
    {
      title: "Chatbot",
      description:
        "A simple Streamlit app that shows how to build a chatbot using DeepAI's GPT-3.5.",
      tags: ["Python", "Streamlit", "Google API"],
      links: {
        github: "https://github.com/AISHWARYAAU/chatbot",
      },
      image: olova4,
      featured: true,
    },
  ];

  return (
    <div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 bg-gray-800 shadow-xl"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;
