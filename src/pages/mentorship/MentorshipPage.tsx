import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, UserCheck, Calendar, MessageSquare } from 'lucide-react';

interface MentorFilters {
  search: string;
  industry: string;
  experience: string;
  availability: string;
}

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  experience: string;
  background: string;
  skills: string[];
  availability: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isVeteran: boolean;
}

const MentorshipPage: React.FC = () => {
  const [filters, setFilters] = useState<MentorFilters>({
    search: '',
    industry: '',
    experience: '',
    availability: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Apply filters to mentors
  const filteredMentors = mockMentors.filter(mentor => {
    return (
      (filters.search === '' || 
        mentor.name.toLowerCase().includes(filters.search.toLowerCase()) || 
        mentor.role.toLowerCase().includes(filters.search.toLowerCase()) ||
        mentor.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        mentor.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()))) &&
      (filters.industry === '' || mentor.industry === filters.industry) &&
      (filters.experience === '' || mentor.experience === filters.experience) &&
      (filters.availability === '' || mentor.availability === filters.availability)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-navy text-white rounded-lg p-8 mb-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Find Your Career Mentor</h1>
            <p className="text-lg mb-6">
              Connect with experienced professionals who understand the challenges of transitioning from military to civilian careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#find-mentors" className="btn bg-gold text-navy hover:bg-gold/90 focus:ring-gold">
                Find a Mentor
              </a>
              <a href="/mentorship/become-mentor" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
                Become a Mentor
              </a>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">How Mentorship Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">1. Find a Match</h3>
              <p className="text-gray-600">
                Browse profiles of experienced mentors who have successfully transitioned to civilian careers.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <Calendar size={24} className="text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">2. Schedule Sessions</h3>
              <p className="text-gray-600">
                Book one-on-one sessions that fit both your schedules, either virtually or in-person.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">3. Grow Your Career</h3>
              <p className="text-gray-600">
                Receive guidance on job searching, interviewing, skill development, and navigating civilian workplaces.
              </p>
            </div>
          </div>
        </div>
        
        {/* Find Mentors Section */}
        <div id="find-mentors">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy">Available Mentors</h2>
              <p className="text-gray-600 mt-2">
                Connect with professionals who understand your journey
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
                  placeholder="Search by name, role, or skills"
                  className="form-input pl-10"
                />
              </div>
              <button className="btn btn-primary">
                Search Mentors
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
                    <option value="Consulting">Consulting</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={filters.experience}
                    onChange={handleFilterChange}
                    className="form-input"
                  >
                    <option value="">All Levels</option>
                    <option value="5+ years">5+ years</option>
                    <option value="10+ years">10+ years</option>
                    <option value="15+ years">15+ years</option>
                    <option value="20+ years">20+ years</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={filters.availability}
                    onChange={handleFilterChange}
                    className="form-input"
                  >
                    <option value="">Any Availability</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-weekly">Bi-weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>
            )}
          </div>
          
          {/* Mentor Listings */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-navy">
                {filteredMentors.length} Mentors Found
              </h3>
              <div className="text-gray-600 text-sm">
                Sorted by: Relevance
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.length === 0 ? (
                <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                  <p className="text-gray-600 mb-4">
                    No mentors found matching your criteria. Try adjusting your filters.
                  </p>
                  <button 
                    onClick={() => setFilters({
                      search: '',
                      industry: '',
                      experience: '',
                      availability: ''
                    })}
                    className="btn btn-primary"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                filteredMentors.map((mentor, index) => (
                  <div 
                    key={mentor.id} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative">
                      <img 
                        src={mentor.imageUrl} 
                        alt={mentor.name} 
                        className="w-full h-48 object-cover"
                      />
                      {mentor.isVeteran && (
                        <span className="absolute top-4 right-4 bg-gold/90 text-navy text-xs px-2 py-1 rounded-full font-medium">
                          Veteran
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-navy">{mentor.name}</h3>
                      <p className="text-gray-600 mb-2">{mentor.role} at {mentor.company}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center text-gold mr-3">
                          <Star size={16} className="fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-700">{mentor.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({mentor.reviewCount} reviews)</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <UserCheck size={16} className="mr-2" />
                          <span>{mentor.industry}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Clock size={16} className="mr-2" />
                          <span>{mentor.availability}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {mentor.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="bg-light-blue px-2 py-1 rounded-full text-xs text-navy">
                              {skill}
                            </span>
                          ))}
                          {mentor.skills.length > 3 && (
                            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                              +{mentor.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full btn btn-primary">
                        Request Mentorship
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-light-blue rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Major Sharma" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-navy">Major Sharma</h3>
                  <p className="text-sm text-gray-600">Indian Army to Project Manager</p>
                </div>
              </div>
              <p className="text-gray-700">
                "My mentor helped me translate my military leadership experience into terms that resonated with civilian employers. Within 3 months, I secured a project management role at a top tech company."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Captain Verma" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-navy">Captain Verma</h3>
                  <p className="text-sm text-gray-600">Indian Navy to Operations Director</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The mentorship program gave me more than just career advice. My mentor became a trusted advisor who helped me navigate the corporate culture and build my professional network."
              </p>
            </div>
          </div>
        </div>
        
        {/* Become a Mentor CTA */}
        <div className="bg-army-green text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Pay It Forward: Become a Mentor</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Share your expertise and help veterans translate their military experience into successful civilian careers. Your guidance can make all the difference.
          </p>
          <a href="/mentorship/become-mentor" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
            Apply to Become a Mentor
          </a>
        </div>
      </div>
    </div>
  );
};

const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Col. Rajesh Kumar (Retd.)',
    role: 'Director of Operations',
    company: 'Global Technologies',
    industry: 'Technology',
    experience: '20+ years',
    background: 'Served 22 years in the Indian Army before transitioning to the technology sector. Specializes in operations management and team leadership.',
    skills: ['Leadership', 'Strategic Planning', 'Operations Management', 'Team Building', 'Crisis Management'],
    availability: 'Weekly',
    rating: 4.9,
    reviewCount: 42,
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: true
  },
  {
    id: '2',
    name: 'Anjali Mehta',
    role: 'Senior HR Director',
    company: 'Talent Solutions Inc.',
    industry: 'Human Resources',
    experience: '15+ years',
    background: 'Specializes in helping veterans showcase their military experience in resumes and interviews. Expert in talent acquisition and career development.',
    skills: ['Resume Building', 'Interview Coaching', 'Career Planning', 'HR Best Practices', 'Networking'],
    availability: 'Bi-weekly',
    rating: 4.8,
    reviewCount: 38,
    imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: false
  },
  {
    id: '3',
    name: 'Cdr. Vikram Singh (Retd.)',
    role: 'Chief Information Security Officer',
    company: 'SecureNet Solutions',
    industry: 'Technology',
    experience: '15+ years',
    background: 'Former naval officer specialized in cybersecurity. Helps veterans transition into information security and technology roles.',
    skills: ['Cybersecurity', 'Information Security', 'Risk Management', 'IT Strategy', 'Technology Transition'],
    availability: 'Monthly',
    rating: 4.7,
    reviewCount: 29,
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: true
  },
  {
    id: '4',
    name: 'Dr. Priya Sharma',
    role: 'Hospital Administrator',
    company: 'Lifeline Medical Center',
    industry: 'Healthcare',
    experience: '10+ years',
    background: 'Specializes in helping veterans transition into healthcare administration roles. Expert in healthcare operations and management.',
    skills: ['Healthcare Administration', 'Medical Operations', 'Staff Management', 'Healthcare Compliance', 'Patient Care'],
    availability: 'Weekly',
    rating: 4.6,
    reviewCount: 23,
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: false
  },
  {
    id: '5',
    name: 'Maj. Arjun Reddy (Retd.)',
    role: 'Project Manager',
    company: 'BuildRight Construction',
    industry: 'Construction',
    experience: '10+ years',
    background: 'Former army engineer who transitioned to construction project management. Specializes in helping veterans leverage their organizational skills in civilian projects.',
    skills: ['Project Management', 'Construction Planning', 'Team Leadership', 'Risk Assessment', 'Budget Management'],
    availability: 'Bi-weekly',
    rating: 4.8,
    reviewCount: 31,
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: true
  },
  {
    id: '6',
    name: 'Samir Kapoor',
    role: 'Finance Director',
    company: 'Global Investments',
    industry: 'Finance',
    experience: '15+ years',
    background: 'Helps veterans translate their skills into finance and business roles. Specializes in career transitions to corporate finance and investment banking.',
    skills: ['Financial Planning', 'Investment Strategies', 'Corporate Finance', 'Career Transition', 'Networking'],
    availability: 'Monthly',
    rating: 4.9,
    reviewCount: 27,
    imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: false
  },
  {
    id: '7',
    name: 'Capt. Neha Verma (Retd.)',
    role: 'Supply Chain Director',
    company: 'LogiTech Solutions',
    industry: 'Logistics',
    experience: '10+ years',
    background: 'Former army logistics officer who transitioned to corporate supply chain management. Helps veterans navigate careers in logistics and operations.',
    skills: ['Supply Chain Management', 'Logistics Operations', 'Inventory Control', 'Process Optimization', 'Team Leadership'],
    availability: 'Weekly',
    rating: 4.7,
    reviewCount: 19,
    imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: true
  },
  {
    id: '8',
    name: 'Rahul Gupta',
    role: 'Senior Software Engineer',
    company: 'TechStar Innovations',
    industry: 'Technology',
    experience: '10+ years',
    background: 'Specializes in helping veterans transition into tech careers. Expert in software development and technical skill acquisition.',
    skills: ['Software Development', 'Technical Training', 'Career Transition', 'Tech Industry Navigation', 'Skill Development'],
    availability: 'Bi-weekly',
    rating: 4.8,
    reviewCount: 22,
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: false
  },
  {
    id: '9',
    name: 'Lt. Col. Sanjay Patel (Retd.)',
    role: 'Government Relations Director',
    company: 'PolicyMakers Inc.',
    industry: 'Government',
    experience: '20+ years',
    background: 'Former military officer with extensive experience in government relations. Helps veterans transition into public service and government affairs roles.',
    skills: ['Government Relations', 'Public Policy', 'Stakeholder Management', 'Strategic Communication', 'Leadership'],
    availability: 'Monthly',
    rating: 4.9,
    reviewCount: 35,
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeteran: true
  }
];

export default MentorshipPage;