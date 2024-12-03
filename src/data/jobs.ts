import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Remote',
    salary: '$120k - $160k',
    description: 'We Are Looking For An Experienced React Developer To Join Our Team.',
    requirements: [
      '5+ Years Of React Experience',
      'Strong TypeScript Skills',
      'Experience With State Management',
      'Understanding Of Modern Web Technologies'
    ],
    posted: '2024-03-10'
  },
  {
    id: '2',
    title: 'Frontend Engineer',
    company: 'StartupX',
    location: 'Remote',
    type: 'Remote',
    salary: '$90k - $120k',
    description: 'Join Our Fast-Growing Startup As A Frontend Engineer.',
    requirements: [
      '3+ Years Of Frontend Development',
      'React/Vue/Angular Experience',
      'CSS/SCSS Expertise',
      'Good Communication Skills'
    ],
    posted: '2024-03-12'
  }
];