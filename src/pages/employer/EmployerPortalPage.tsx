import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Briefcase, Award, Calendar, CheckCircle, Target, BarChart } from 'lucide-react';

const EmployerPortalPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="bg-navy text-white rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Hire Veterans with Exceptional Skills</h1>
              <p className="text-xl mb-6">
                Access a pool of disciplined, skilled, and mission-driven talent for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/employer/register" className="btn bg-gold text-navy hover:bg-gold/90 focus:ring-gold">
                  Create Employer Account
                </Link>
                <Link to="/employer/post-job" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
                  Post a Job
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hiring veterans" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Why Hire Veterans */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Hire Veterans?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veterans bring unique skills and perspectives that can give your organization a competitive edge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Leadership & Teamwork</h3>
              <p className="text-gray-600">
                Veterans have led teams in high-pressure situations and understand the importance of collaboration, delegation, and accountability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <Target size={24} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Adaptability & Resilience</h3>
              <p className="text-gray-600">
                Military service requires quick adaptation to changing conditions and resilience in challenging situations—valuable traits in any workplace.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Discipline & Work Ethic</h3>
              <p className="text-gray-600">
                Veterans are trained to be detail-oriented, punctual, and committed to completing tasks efficiently and effectively.
              </p>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to connect with qualified veterans who match your hiring needs.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line (desktop only) */}
            <div className="hidden md:block absolute top-24 left-1/2 w-[calc(100%-200px)] h-0.5 bg-navy -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">Create Account</h3>
                <p className="text-gray-600">
                  Register your company and create your employer profile.
                </p>
              </div>
              
              <div className="relative text-center">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">Post Jobs</h3>
                <p className="text-gray-600">
                  Create job listings highlighting veteran-friendly opportunities.
                </p>
              </div>
              
              <div className="relative text-center">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">Connect</h3>
                <p className="text-gray-600">
                  Review matched candidates and initiate the interview process.
                </p>
              </div>
              
              <div className="relative text-center">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">Hire & Support</h3>
                <p className="text-gray-600">
                  Hire veterans and access resources to support their transition.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Employer Services */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Employer Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive services to help you attract, hire, and retain veteran talent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 flex">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                <Briefcase size={24} className="text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Targeted Job Postings</h3>
                <p className="text-gray-600 mb-4">
                  Post job opportunities specifically for veterans and receive AI-matched candidates based on military experience and skills.
                </p>
                <Link to="/employer/post-job" className="text-navy font-medium hover:text-navy/80 flex items-center">
                  Post a Job <Briefcase size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 flex">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                <Calendar size={24} className="text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Hiring Events</h3>
                <p className="text-gray-600 mb-4">
                  Participate in virtual and in-person career fairs specifically for veterans to meet potential candidates.
                </p>
                <Link to="/employer/events" className="text-navy font-medium hover:text-navy/80 flex items-center">
                  View Upcoming Events <Calendar size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 flex">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                <Award size={24} className="text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Veteran-Friendly Certification</h3>
                <p className="text-gray-600 mb-4">
                  Get recognized as a veteran-friendly employer and showcase your commitment to hiring and supporting veterans.
                </p>
                <Link to="/employer/certification" className="text-navy font-medium hover:text-navy/80 flex items-center">
                  Learn More <Award size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 flex">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                <BarChart size={24} className="text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Hiring Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Access detailed analytics and insights about your veteran recruitment efforts and outcomes.
                </p>
                <Link to="/employer/analytics" className="text-navy font-medium hover:text-navy/80 flex items-center">
                  View Analytics <BarChart size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">Employer Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other companies have benefited from hiring veterans through our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48">
                  <img 
                    src={story.imageUrl} 
                    alt={story.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield size={24} className="text-navy mr-2" />
                    <h3 className="text-xl font-bold text-navy">{story.company}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {story.testimonial}
                  </p>
                  <p className="text-sm text-gray-500">
                    - {story.author}, {story.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/employer/success-stories" className="btn btn-primary">
              View All Success Stories
            </Link>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-army-green text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hire Veterans?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Join hundreds of employers who are benefiting from the skills, discipline, and leadership that veterans bring to the workplace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/employer/register" className="btn bg-gold text-navy hover:bg-gold/90 focus:ring-gold">
              Create Employer Account
            </Link>
            <Link to="/contact" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const successStories = [
  {
    company: 'TechSolutions India',
    author: 'Raj Patel',
    role: 'Head of Talent Acquisition',
    testimonial: 'Veterans have proven to be some of our most adaptable and reliable team members. Their leadership skills have transformed our project management approach.',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    company: 'Global Logistics Corp',
    author: 'Meera Sharma',
    role: 'COO',
    testimonial: 'The veterans we\'ve hired through VetCareers have exceptional attention to detail and operational expertise. They\'ve significantly improved our processes.',
    imageUrl: 'https://images.pexels.com/photos/7706466/pexels-photo-7706466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    company: 'SecureNet Systems',
    author: 'Arjun Mehta',
    role: 'Director of Security',
    testimonial: 'Our veteran hires have brought invaluable experience in security protocols and risk assessment. They understand mission-critical operations like no one else.',
    imageUrl: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export default EmployerPortalPage;