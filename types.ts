// Fix: Import `ReactElement` to resolve "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image1: string;
  image2: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  imageUrl: string;
  courses: string[];
}

export interface Publication {
    title: string;
    journal: string;
    date: string;
    abstract: string;
}