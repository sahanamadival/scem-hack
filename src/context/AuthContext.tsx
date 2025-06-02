import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface User {
  id: string;
  name: string;
  email: string; // For veterans, store service ID here
  role: 'veteran' | 'employer' | 'mentor' | 'admin';
  profileCompleted: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (identifier: string, password: string, role: 'veteran' | 'employer' | 'mentor') => Promise<void>;
  register: (name: string, email: string, password: string, role: 'veteran' | 'employer' | 'mentor') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (identifier: string, password: string, role: 'veteran' | 'employer' | 'mentor') => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock credential checks
      if (role === 'veteran' && identifier === 'SERVICE123' && password === 'password') {
        const mockUser: User = {
          id: '1',
          name: 'John Veteran',
          email: 'SERVICE123', // store service ID in email field
          role: 'veteran',
          profileCompleted: false,
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        toast.success('Login successful!');
        navigate('/profile');
      } else if (
        role !== 'veteran' &&
        identifier === 'employer@example.com' &&
        password === 'password'
      ) {
        const mockUser: User = {
          id: '2',
          name: 'Jane Employer',
          email: identifier,
          role,
          profileCompleted: false,
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        toast.success('Login successful!');
        navigate('/profile');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: 'veteran' | 'employer' | 'mentor'
  ) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role,
        profileCompleted: false,
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('Registration successful!');
      navigate('/profile');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
