import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <div className="relative group">
                <button className="flex items-center space-x-2 text-navy font-medium">
                  <span>{user?.name}</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <div className="py-1">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
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
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/jobs" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-navy text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Jobs
            </NavLink>
            <NavLink 
              to="/mentorship" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-navy text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Mentorship
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-navy text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Resources
            </NavLink>
            <NavLink 
              to="/employers" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-navy text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              For Employers
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated ? (
              <div>
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <UserCircle className="h-10 w-10 text-navy" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user?.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 px-4">
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-navy text-white"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;