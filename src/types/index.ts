export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface SearchFilters {
  query: string;
  type: string;
  location: string;
}