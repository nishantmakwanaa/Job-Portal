import React from 'react';
import { Job } from '../types';
import { Building2, MapPin, Clock, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{job.location}</span>
          </div>
        </div>
        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          {job.type}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>Posted {job.posted}</span>
        </div>
      </div>

      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Apply Now
      </button>
    </div>
  );
};