import React from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.query}
            onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          />
        </div>

        <div className="relative">
          <Briefcase className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={filters.type}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          >
            <option value="">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>
    </div>
  );
};