import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import SkillTranslation from './pages/Skilltranslation';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/veteran/ProfilePage';
import JobBoardPage from './pages/jobs/JobBoardPage';
import MentorshipPage from './pages/mentorship/MentorshipPage';
import EmployerPortalPage from './pages/employer/EmployerPortalPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ResumeBuilderPage from './pages/resume/ResumeBuilderPage'; // Add this import
import NotFoundPage from './pages/NotFoundPage';
import JobMatching from './pages/veteran/JobMatching';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/resume-builder" element={<ResumeBuilderPage />} /> {/* Add this route */}
              <Route path="/jobs" element={<JobBoardPage />} />
              <Route path="/mentorship" element={<MentorshipPage />} /><Route path="/mentorship" element={<MentorshipPage />} />
<Route path="/skill-translation" element={<SkillTranslation />} />
<Route path="/employers" element={<EmployerPortalPage />} />

              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/job-matching" element={<JobMatching />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;