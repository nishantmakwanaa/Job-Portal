import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { JobCard } from './components/JobCard';
import { jobs } from './data/jobs';
import { SearchFilters } from './types';
import { BriefcaseIcon } from 'lucide-react';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    type: '',
    location: ''
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesQuery = job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.query.toLowerCase());
      const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType = !filters.type || job.type === filters.type;

      return matchesQuery && matchesLocation && matchesType;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Job Portal</h1>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Find Jobs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Companies</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Post a Job</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Dream Job</h2>
          <SearchBar filters={filters} onFilterChange={setFilters} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No Jobs Found Matching Your Criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;