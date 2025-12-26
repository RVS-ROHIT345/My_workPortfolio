
import React from 'react';
import { Skill, Project, Experience, Education, Publication } from './types';

// Icons for skills
const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M6 15c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3" />
    <path d="M12 18c0 1.5-1.5 3-4.5 3S3 19.5 3 18" />
    <path d="M12 12c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3" />
    <path d="M8 8c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3" />
    <path d="M12 2c1.5 2 1.5 5 0 7" />
    <path d="M15 3c1 1.5 1 4 0 6" />
  </svg>
);
const SpringBootIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M7 12L10 15L17 8" />
  </svg>
);
const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
  </svg>
);
const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M10.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M13.5 15.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    <path d="M8 8v7a2 2 0 0 0 2 2h4" />
    <path d="M16 16V9a2 2 0 0 0-2-2h-4" />
  </svg>
);
const AzureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M2 18L10 4L14 11L18 4L22 18H2Z" />
    <path d="M10 4L14 11H6L10 4Z" />
  </svg>
);
const DockerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M2.5 7.5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-10zM5.5 10.5h1.5M8.5 10.5h1.5M11.5 10.5h1.5" />
    <path d="M4 7V5a1 1 0 0 1 1-1h2" />
    <path d="M19 4a1 1 0 0 1 1 1v2" />
  </svg>
);
const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const NodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M8.7 8.3c.6-.6 1.5-.6 2.1 0l4.6 4.6c.6.6.6 1.5 0 2.1l-2.1 2.1c-.6.6-1.5.6-2.1 0L6.6 12.5c-.6-.6-.6-1.5 0-2.1l2.1-2.1z" />
    <path d="M12 2v2" />
    <path d="m4.9 4.9 1.4 1.4" />
    <path d="M2 12h2" />
    <path d="m4.9 19.1 1.4-1.4" />
    <path d="M12 20v2" />
    <path d="m19.1 19.1-1.4-1.4" />
    <path d="M22 12h-2" />
    <path d="m19.1 4.9-1.4 1.4" />
  </svg>
);

export const SKILLS: Skill[] = [
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'React.js', icon: <ReactIcon /> },
  { name: 'Spring Boot', icon: <SpringBootIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Azure AI', icon: <AIIcon /> },
  { name: 'Microsoft Azure', icon: <AzureIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Angular', icon: <DockerIcon /> },
];

export const PROJECTS: Project[] = [
    {
        title: 'Admin-Controlled E-Commerce Dashboard',
        description: 'Architected a full-stack eCommerce dashboard with real-time analytics for products, users, and revenue, improving operational transparency by 45%.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'RESTful APIs'],
        image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        image2: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
        liveUrl: '#',
      },
    {
      title: 'AI-Powered Feedback Classifier',
      description: 'Built a sentiment analysis engine to classify student feedback (positive, neutral, negative), increasing evaluation accuracy by 70%.',
      tags: ['Angular', 'SpringBoot', 'MySQL', 'Machine Learning', 'Python'],
      image1: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop',
      image2: 'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?q=80&w=800&auto=format&fit=crop',
      repoUrl: 'https://github.com/VSRohit',
      liveUrl: '#',
    }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Blue Horse Digital',
    period: 'Feb 2025 - Present',
    location: 'Richmond, Virginia, USA',
    description: [
      'Directed development of an AI-powered Case Builder platform using multi-agent AI, improving efficiency by 60%.',
      'Engineered an interactive Streamlit interface with Azure Blob Storage persistence.',
      'Orchestrated integration of Azure AI Foundry’s GPT-4o-mini with Crew’s agentic system.',
      'Deployed Dockerized services on Microsoft Azure, ensuring 99% uptime.'
    ],
  },
  {
    role: 'Graduate Teaching Assistant',
    company: 'George Mason University',
    period: 'Aug 2023 - Dec 2024',
    location: 'Fairfax, Virginia, USA',
    description: [
      'Instructed and mentored 65 students in web development, UI/UX design, and animation.',
      'Spearheaded improvements in student deliverables, driving a 30% rise in project scores.',
      'Developed tutorials and grading rubrics that streamlined assessment.'
    ],
  },
  {
    role: 'Programmer Analyst (Full Stack)',
    company: 'Cognizant (Client: Discover Bank)',
    period: 'Aug 2020 - Jan 2023',
    location: 'Chennai, India',
    description: [
      'Drove development of secure, user-centric banking features using React.js and REST APIs.',
      'Resolved 50+ UI/UX defects, improving usability and lowering support tickets by 25%.',
      'Implemented automated testing with Playwright and Jest, expanding coverage by 30%.',
      'Collaborated with DevOps teams to embed CI/CD pipelines, increasing efficiency by 35%.'
    ],
  }
];

export const EDUCATIONS: Education[] = [
    {
        degree: "Master's in Computer Science",
        institution: 'George Mason University',
        period: 'Jan 2023 - Dec 2024',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
        courses: ['Advanced Algorithms', 'Machine Learning', 'Database Systems', 'Cloud Computing', 'UI/UX Design']
    },
    {
        degree: "Bachelor's in Computer Science",
        institution: 'SRM Institute of Science and Technology',
        period: 'Apr 2016 - May 2020',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
        courses: ['Data Structures', 'Software Engineering', 'Operating Systems', 'Computer Networks']
    }
];

export const PUBLICATIONS: Publication[] = [
    {
        title: 'Smart Farming Techniques for New Farmers Using Machine Learning',
        journal: 'Proceedings of the 6th International Paper Conference on Recent Trends in Computing',
        date: 'Springer Publication',
        abstract: 'This research explores various machine learning models to assist new farmers in crop prediction and soil health analysis, providing a technological edge to traditional farming methods.'
    }
];
