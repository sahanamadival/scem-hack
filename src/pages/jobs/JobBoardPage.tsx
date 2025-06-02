import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, Building, Star } from 'lucide-react';
import { mockJobs } from '../../data/mockJobs';

interface JobFilters {
  search: string;
  location: string;
  industry: string;
  jobType: string;
  experienceLevel: string;
}

const JobBoardPage: React.FC = () => {
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    industry: '',
    jobType: '',
    experienceLevel: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Apply filters to jobs
  const filteredJobs = mockJobs.filter(job => {
    return (
      (filters.search === '' || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) || 
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.location === '' || job.location.includes(filters.location)) &&
      (filters.industry === '' || job.industry === filters.industry) &&
      (filters.jobType === '' || job.jobType === filters.jobType) &&
      (filters.experienceLevel === '' || job.experienceLevel === filters.experienceLevel)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy">Find Your Next Career</h1>
            <p className="text-gray-600 mt-2">
              Discover opportunities that value your military experience
            </p>
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="mt-4 md:mt-0 btn bg-white text-navy border border-gray-300 flex items-center"
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search jobs, companies, or keywords"
                className="form-input pl-10"
              />
            </div>
            <div className="relative flex-1 md:max-w-xs">
              <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Location or Remote"
                className="form-input pl-10"
              />
            </div>
            <button className="btn btn-primary">
              Search Jobs
            </button>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200 animate-fade-in">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={filters.industry}
                  onChange={handleFilterChange}
                  className="form-input"
                >
                  <option value="">All Industries</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Government">Government</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Logistics">Logistics & Transportation</option>
                  <option value="Security">Security</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={filters.jobType}
                  onChange={handleFilterChange}
                  className="form-input"
                >
                  <option value="">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={filters.experienceLevel}
                  onChange={handleFilterChange}
                  className="form-input"
                >
                  <option value="">All Levels</option>
                  <option value="Entry">Entry Level</option>
                  <option value="Mid">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Job Listings */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-navy">
              {filteredJobs.length} Jobs Found
            </h2>
            <div className="text-gray-600 text-sm">
              Sorted by: Relevance
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-600 mb-4">
                  No jobs found matching your criteria. Try adjusting your filters.
                </p>
                <button 
                  onClick={() => setFilters({
                    search: '',
                    location: '',
                    industry: '',
                    jobType: '',
                    experienceLevel: ''
                  })}
                  className="btn btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job, index) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-navy mr-3">{job.title}</h3>
                        {job.isVeteranFriendly && (
                          <span className="bg-gold/20 text-navy text-xs px-2 py-1 rounded-full font-medium">
                            Veteran Friendly
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <Building size={16} className="mr-1" />
                          {job.company}
                        </div>
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <Briefcase size={16} className="mr-1" />
                          {job.jobType}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="bg-light-blue px-3 py-1 rounded-full text-xs text-navy">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 3 && (
                          <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
                            +{job.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-4 md:mt-0">
                      <div className="flex items-center mb-2">
                        <Star size={16} className={`mr-1 ${job.matchScore >= 80 ? 'text-gold' : 'text-gray-400'}`} />
                        <span className={`text-sm font-medium ${job.matchScore >= 80 ? 'text-navy' : 'text-gray-600'}`}>
                          {job.matchScore}% Match
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 mb-3">
                        Posted {job.postedDate}
                      </span>
                      <button className="btn btn-primary w-full md:w-auto">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoardPage;