import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield size={80} className="text-navy opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle size={32} className="text-navy" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="pt-8 border-t border-gray-200 mt-8">
            <p className="text-gray-600 mb-4">
              Looking for something specific? Here are some helpful links:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs" className="text-navy hover:underline">
                Job Board
              </Link>
              <Link to="/resources" className="text-navy hover:underline">
                Resources
              </Link>
              <Link to="/contact" className="text-navy hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;