import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield size={32} className="text-navy" />
              <span className="text-xl font-bold text-navy">VetCareers</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink 
              to="/jobs" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Jobs
            </NavLink>
            <NavLink 
              to="/mentorship" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Mentorship
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Resources
            </NavLink>
            <NavLink 
              to="/employers" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              For Employers
            </NavLink>

            {isAuthenticated ? (
              <div className="relative" ref={profileRef}>
                <button 
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 text-navy font-medium focus:outline-none"
                >
                  <span>{user?.name}</span>
                  <ChevronDown size={16} className={`transition-transform ${isProfileOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="nav-link">
                  Log in
                </Link>
                <Link to="/register" className="btn btn-primary py-2 px-4">
                  Sign up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - remains the same as your original */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {/* ... (keep your existing mobile menu code) ... */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;