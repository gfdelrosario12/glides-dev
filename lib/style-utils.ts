/**
 * Styling utilities and constants for badges and colors
 */

import { BadgeColor } from './types';

/**
 * Get badge styling for project categories
 */
export function getProjectCategoryBadge(category: string): string {
  const badgeMap: Record<string, string> = {
    Personal: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    Academic: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    Freelance: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    Enterprise: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  };
  return badgeMap[category] || 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
}

/**
 * Get badge styling for experience badges
 */
export function getExperienceBadgeColor(color: BadgeColor): string {
  const colorMap: Record<BadgeColor, string> = {
    blue: 'bg-blue-500 text-white dark:bg-blue-600',
    red: 'bg-red-500 text-white dark:bg-red-600',
    green: 'bg-green-500 text-white dark:bg-green-600',
    purple: 'bg-purple-500 text-white dark:bg-purple-600',
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold',
    silver: 'bg-gradient-to-r from-gray-300 to-gray-500 text-white font-bold',
    bronze: 'bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold',
  };
  return colorMap[color] || 'bg-gray-500 text-white';
}

/**
 * Get color styling for technology badges
 */
export function getTechBadgeColor(tech: string): string {
  const techColorMap: Record<string, string> = {
    'IoT': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'Raspberry Pi': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    'Python': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
    'TypeScript': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Three.js': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Framer Motion': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    'React': 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
    'React.js': 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
    'Redux': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Java': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    'Spring': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Spring Boot': 'bg-green-200 text-green-800 dark:bg-green-900/40 dark:text-green-200',
    'PostgreSQL': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    'MySQL': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'AWS': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    'AWS S3': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    'AWS EC2': 'bg-amber-200 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
    'OpenAI - Whisper': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Arduino': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    'C++': 'bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Docker': 'bg-sky-200 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
    'DigitalOcean': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'REST API': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Version Control Systems': 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
    'Technology': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Operations': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Marketing': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    'Communication': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'People Management': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    'Leadership': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    'Google Cloud': 'bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Microsoft Azure': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  };

  return techColorMap[tech.trim()] || 'bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300';
}

/**
 * Parse date from duration string for sorting
 */
export function extractDateFromDuration(duration: string): Date {
  const match = duration?.match(/(\d{4})/g);
  if (match && match.length > 0) {
    return new Date(parseInt(match[match.length - 1]), 0);
  }
  return new Date(0);
}

/**
 * Split and trim tech stack string
 */
export function parseTechStack(techStack: string): string[] {
  return techStack.split('|').map((tech) => tech.trim()).filter(Boolean);
}
