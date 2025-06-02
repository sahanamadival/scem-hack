import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <Shield size={32} className="text-gold" />
              <span className="text-xl font-bold">VetCareers</span>
            </div>
            <p className="mt-4 text-gray-300">
              Bridging the gap between military service and civilian careers.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-medium">For Veterans</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-gold transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-gold transition-colors">
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-gold transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-gold transition-colors">
                  Create Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-medium">For Employers</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/employers" className="text-gray-300 hover:text-gold transition-colors">
                  Why Hire Veterans
                </Link>
              </li>
              <li>
                <Link to="/employers/post" className="text-gray-300 hover:text-gold transition-colors">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link to="/employers/events" className="text-gray-300 hover:text-gold transition-colors">
                  Host Events
                </Link>
              </li>
              <li>
                <Link to="/employers/success" className="text-gray-300 hover:text-gold transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-medium">About</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-gold transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} VetCareers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;