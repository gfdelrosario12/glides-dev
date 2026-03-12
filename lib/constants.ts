/**
 * Application-wide constants
 */

// CSV File Paths
export const CSV_PATHS = {
  PROJECTS: '/data/projects.csv',
  EXPERIENCES: '/data/experiences.csv',
  CERTIFICATIONS: '/data/certifications.csv',
} as const;

// Filter Constants
export const CATEGORY_FILTERS = ['Show All', 'Academic', 'Freelance', 'Personal'] as const;

export const TECH_FILTERS = [
  'IoT',
  'Raspberry Pi',
  'Python',
  'Next.js',
  'TypeScript',
  'Three.js',
  'Tailwind CSS',
  'Framer Motion',
  'Java',
  'Spring',
  'Spring Boot',
  'PostgreSQL',
  'OpenAI - Whisper',
  'AWS',
  'AWS S3',
  'AWS EC2',
  'MySQL',
  'React.js',
  'Redux',
  'Version Control Systems',
  'Arduino',
  'C++',
  'Docker',
  'DigitalOcean',
  'REST API',
] as const;

export const EXPERIENCE_TABS = ['Professional', 'Organizational', 'Competetive'] as const;

// Animation Durations (in milliseconds)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Breakpoints (match Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/gfdelrosario12',
  LINKEDIN: 'https://www.linkedin.com/in/gladwindr/',
  BIO_LINK: 'https://bio.link/gladwin_dr',
  EMAIL: 'delrosario.gladwinferdz.infante@gmail.com',
} as const;

// SEO Meta
export const SEO = {
  TITLE: 'Gladwin Ferdz Del Rosario - Full Stack Developer & Cloud Engineer',
  DESCRIPTION:
    'Portfolio of Gladwin Ferdz Del Rosario - Full Stack Software Developer and Google Cloud Certified Associate Cloud Engineer specializing in React, Spring Boot, and Cloud Computing.',
  KEYWORDS: [
    'Full Stack Developer',
    'Cloud Engineer',
    'React',
    'Next.js',
    'Spring Boot',
    'Google Cloud',
    'Portfolio',
    'Web Development',
  ],
} as const;
