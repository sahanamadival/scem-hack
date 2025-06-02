import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users, Briefcase, BookOpen } from 'lucide-react';
import HeroImage from '../components/common/HeroImage';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <HeroImage />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Your Military Experience <br /> <span className="text-gold">Has Civilian Value</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl drop-shadow-lg">
            Connecting veterans with opportunities, mentors, and resources for successful career transitions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/register" className="btn bg-gold text-navy hover:bg-gold/90 focus:ring-gold">
              Create Your Profile
            </Link>
            <Link to="/jobs" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">How VetCareers Helps You</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges veterans face when transitioning to civilian careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card flex flex-col items-center text-center p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-3 bg-light-blue rounded-full mb-6">
                <Briefcase size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Skill Translation</h3>
              <p className="text-gray-600 mb-6">
                Our AI tools translate your military skills and experience into civilian terms that employers understand and value.
              </p>
              <Link to="/resources/skill-translator" className="mt-auto flex items-center text-navy font-medium hover:text-navy/80">
                Translate Your Skills <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="card flex flex-col items-center text-center p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-3 bg-light-blue rounded-full mb-6">
                <Search size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Job Matching</h3>
              <p className="text-gray-600 mb-6">
                Our smart algorithm matches you with jobs that align with your military background, skills, and career goals.
              </p>
              <Link to="/jobs" className="mt-auto flex items-center text-navy font-medium hover:text-navy/80">
                Find Matching Jobs <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="card flex flex-col items-center text-center p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="p-3 bg-light-blue rounded-full mb-6">
                <Users size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mentorship</h3>
              <p className="text-gray-600 mb-6">
                Connect with mentors who have successfully transitioned from military to civilian careers in your field of interest.
              </p>
              <Link to="/mentorship" className="mt-auto flex items-center text-navy font-medium hover:text-navy/80">
                Find a Mentor <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl font-bold text-gold">60K+</p>
              <p className="mt-2 text-gray-300">Veterans Transitioning Annually</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl font-bold text-gold">85%</p>
              <p className="mt-2 text-gray-300">Placement Success Rate</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl font-bold text-gold">500+</p>
              <p className="mt-2 text-gray-300">Employer Partners</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-4xl font-bold text-gold">300+</p>
              <p className="mt-2 text-gray-300">Veteran Mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Resources For Your Journey</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Access guides, training materials, and tools to help with your transition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="card flex flex-col h-full animate-slide-up" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-2 bg-light-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                <Link to={resource.link} className="mt-auto flex items-center text-navy font-medium hover:text-navy/80">
                  View Resource <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/resources" className="btn btn-primary">
              View All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-army-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Civilian Career?</h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Join thousands of veterans who have successfully transitioned to fulfilling civilian careers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-gold text-navy hover:bg-gold/90 focus:ring-gold">
              Create Your Profile
            </Link>
            <Link to="/employers" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
              For Employers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const resources = [
  {
    title: 'Resume Builder',
    description: 'Create a civilian-friendly resume that highlights your transferable skills and military achievements.',
    link: '/resources/resume-builder',
  },
  {
    title: 'Interview Preparation',
    description: 'Practice answering common interview questions and learn how to discuss your military experience.',
    link: '/resources/interview-prep',
  },
  {
    title: 'Skills Assessment',
    description: 'Identify your strongest skills and learn how they translate to high-demand civilian jobs.',
    link: '/resources/skills-assessment',
  },
  {
    title: 'GI Bill Benefits Guide',
    description: 'Understand how to use your GI Bill benefits for education and training programs.',
    link: '/resources/gi-bill-guide',
  },
  {
    title: 'Networking Strategies',
    description: 'Build a professional network and leverage it for job opportunities and career advancement.',
    link: '/resources/networking',
  },
  {
    title: 'Transition Assistance',
    description: 'Access resources from the Transition Assistance Program (TAP) and other government initiatives.',
    link: '/resources/transition-assistance',
  },
];

export default HomePage;