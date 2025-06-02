import React, { useState } from 'react';
import { Search, BookOpen, FileText, Video, Download, ArrowRight, ExternalLink } from 'lucide-react';

interface ResourceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'guide' | 'video' | 'template';
  url: string;
  featured?: boolean;
  popular?: boolean;
}

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Filter resources based on search query and active category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured resources
  const featuredResources = resources.filter(resource => resource.featured);
  
  // Get popular resources
  const popularResources = resources.filter(resource => resource.popular);

  return (
    <div className="bg-gray-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-navy text-white rounded-lg p-8 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Career Transition Resources</h1>
            <p className="text-lg mb-6">
              Access guides, tools, and training materials to help you successfully transition from military to civilian career.
            </p>
            <div className="relative max-w-lg">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for resources..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gold text-gray-800"
              />
            </div>
          </div>
        </div>
        
        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="h-3 bg-gold"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block mb-2 px-2 py-1 bg-light-blue rounded text-xs font-medium text-navy">
                        {resource.category}
                      </span>
                      <h3 className="text-xl font-bold text-navy mb-2">{resource.title}</h3>
                    </div>
                    <ResourceTypeIcon type={resource.type} />
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-navy font-medium hover:text-navy/80"
                  >
                    Access Resource <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy hover:bg-light-blue'
              }`}
            >
              All Resources
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full flex items-center ${
                  activeCategory === category.id
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy hover:bg-light-blue'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* All Resources */}
        <div className="mb-12">
          {filteredResources.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-600 mb-4">
                No resources found matching your search. Try different keywords or browse by category.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 bg-light-blue rounded text-xs font-medium text-navy">
                      {resource.category}
                    </span>
                    <ResourceTypeIcon type={resource.type} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-navy font-medium hover:text-navy/80"
                  >
                    Access Resource <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Popular Resources */}
        <div className="bg-light-blue rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Most Popular Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularResources.slice(0, 4).map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-sm p-6 flex items-start">
                <ResourceTypeIcon type={resource.type} size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{resource.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center text-navy font-medium hover:text-navy/80"
                  >
                    View Resource <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="bg-army-green text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Can't find what you're looking for? Our career counselors are here to provide personalized assistance for your unique situation.
          </p>
          <a href="/contact" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
            Contact a Career Counselor
          </a>
        </div>
      </div>
    </div>
  );
};

// Resource Type Icon component
const ResourceTypeIcon: React.FC<{ 
  type: string;
  size?: number;
  className?: string;
}> = ({ type, size = 20, className = '' }) => {
  switch (type) {
    case 'article':
      return <FileText size={size} className={`text-navy ${className}`} />;
    case 'guide':
      return <BookOpen size={size} className={`text-navy ${className}`} />;
    case 'video':
      return <Video size={size} className={`text-navy ${className}`} />;
    case 'template':
      return <Download size={size} className={`text-navy ${className}`} />;
    default:
      return <FileText size={size} className={`text-navy ${className}`} />;
  }
};

// Categories
const categories: ResourceCategory[] = [
  {
    id: 'resume',
    name: 'Resumes & CVs',
    icon: <FileText size={16} />
  },
  {
    id: 'interview',
    name: 'Interviews',
    icon: <BookOpen size={16} />
  },
  {
    id: 'skill-translation',
    name: 'Skill Translation',
    icon: <BookOpen size={16} />
  },
  {
    id: 'education',
    name: 'Education',
    icon: <BookOpen size={16} />
  },
  {
    id: 'networking',
    name: 'Networking',
    icon: <BookOpen size={16} />
  }
];

// Resources
const resources: Resource[] = [
  {
    id: '1',
    title: 'Military to Civilian Resume Guide',
    description: 'Learn how to translate your military experience into a compelling civilian resume.',
    category: 'resume',
    type: 'guide',
    url: '/resources/guides/military-to-civilian-resume',
    featured: true
  },
  {
    id: '2',
    title: 'Mastering Behavioral Interviews',
    description: 'Prepare for common interview questions and learn how to effectively communicate your military experience.',
    category: 'interview',
    type: 'video',
    url: '/resources/videos/behavioral-interviews',
    popular: true
  },
  {
    id: '3',
    title: 'Military Skills Translator',
    description: 'Interactive tool to help you translate your military skills and experience into civilian terms.',
    category: 'skill-translation',
    type: 'article',
    url: '/resources/tools/skills-translator',
    featured: true,
    popular: true
  },
  {
    id: '4',
    title: 'Resume Templates for Veterans',
    description: 'Download professionally designed resume templates specifically for military veterans.',
    category: 'resume',
    type: 'template',
    url: '/resources/templates/veteran-resumes',
    popular: true
  },
  {
    id: '5',
    title: 'GI Bill Benefits Guide',
    description: 'Comprehensive guide to understanding and maximizing your GI Bill education benefits.',
    category: 'education',
    type: 'guide',
    url: '/resources/guides/gi-bill-benefits',
    featured: true
  },
  {
    id: '6',
    title: 'Networking Strategies for Veterans',
    description: 'Learn how to build a professional network and leverage it for job opportunities.',
    category: 'networking',
    type: 'article',
    url: '/resources/articles/networking-strategies',
    popular: true
  },
  {
    id: '7',
    title: 'Interview Preparation Worksheet',
    description: 'Downloadable worksheet to help you prepare for job interviews with practice questions and answer frameworks.',
    category: 'interview',
    type: 'template',
    url: '/resources/templates/interview-prep'
  },
  {
    id: '8',
    title: 'LinkedIn Profile Optimization for Veterans',
    description: 'Learn how to create a standout LinkedIn profile that highlights your military experience.',
    category: 'networking',
    type: 'video',
    url: '/resources/videos/linkedin-for-veterans'
  },
  {
    id: '9',
    title: 'Transition Assistance Program Overview',
    description: 'Guide to understanding and utilizing the government\'s Transition Assistance Program (TAP).',
    category: 'skill-translation',
    type: 'article',
    url: '/resources/articles/tap-overview'
  },
  {
    id: '10',
    title: 'Cover Letter Templates for Veterans',
    description: 'Downloadable cover letter templates designed specifically for military veterans.',
    category: 'resume',
    type: 'template',
    url: '/resources/templates/veteran-cover-letters'
  },
  {
    id: '11',
    title: 'Salary Negotiation Strategies',
    description: 'Learn how to effectively negotiate your salary and benefits in civilian roles.',
    category: 'interview',
    type: 'video',
    url: '/resources/videos/salary-negotiation'
  },
  {
    id: '12',
    title: 'Educational Pathways for Veterans',
    description: 'Explore different education and training options available to veterans.',
    category: 'education',
    type: 'guide',
    url: '/resources/guides/educational-pathways'
  },
  {
    id: '13',
    title: 'Industry-Specific Skill Translation Guides',
    description: 'Detailed guides for translating military skills to specific industries like technology, healthcare, and finance.',
    category: 'skill-translation',
    type: 'guide',
    url: '/resources/guides/industry-skill-translation'
  },
  {
    id: '14',
    title: 'Veteran Entrepreneurs: Starting Your Business',
    description: 'Resources and guidance for veterans interested in entrepreneurship and starting their own business.',
    category: 'education',
    type: 'article',
    url: '/resources/articles/veteran-entrepreneurs'
  },
  {
    id: '15',
    title: 'Job Search Strategy Worksheet',
    description: 'Downloadable worksheet to help you plan and organize your civilian job search.',
    category: 'networking',
    type: 'template',
    url: '/resources/templates/job-search-strategy'
  }
];

export default ResourcesPage;