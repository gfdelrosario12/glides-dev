/**
 * Type definitions for application data models
 */

export interface Project {
  title: string;
  description: string;
  category: 'Academic' | 'Freelance' | 'Personal' | 'Enterprise';
  techStack?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  type: 'professional' | 'organizational' | 'competetive';
  title: string;
  organization: string;
  badgeLabel: string;
  badgeColor: 'blue' | 'red' | 'green' | 'purple' | 'gold' | 'silver' | 'bronze';
  duration: string;
  location: string;
  description: string;
  skills: string;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
  description: string;
  color: string;
  url: string;
}

export type BadgeColor = 'blue' | 'red' | 'green' | 'purple' | 'gold' | 'silver' | 'bronze';

export type ProjectCategory = 'Show All' | 'Academic' | 'Freelance' | 'Personal' | 'Enterprise';

export type ExperienceType = 'professional' | 'organizational' | 'competetive';
