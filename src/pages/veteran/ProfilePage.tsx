import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Check, Save, UserCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  rank: string;
  branch: string;
  yearsOfService: string;
  specialization: string;
  location: string;
  education: string;
  about: string;
  desiredRole: string;
  desiredIndustry: string;
  desiredLocation: string;
  willingToRelocate: boolean;
  skills: string;
}

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('military');
  const { register, handleSubmit, formState: { errors, isDirty } } = useForm<ProfileFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ProfileFormData) => {
    setIsSubmitting(true);
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Profile data:', data);
    toast.success('Profile updated successfully!');
    setIsSubmitting(false);
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Profile Header */}
          <div className="bg-navy px-6 py-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-light-blue rounded-full flex items-center justify-center">
              <UserCircle size={64} className="text-navy" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-white">{user.name || 'Welcome, Veteran'}</h1>
              <p className="text-light-blue">{user.email}</p>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold text-navy">
                {user.role === 'veteran' ? 'Veteran' : user.role}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('military')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'military'
                    ? 'border-b-2 border-navy text-navy'
                    : 'text-gray-500 hover:text-navy hover:border-navy'
                }`}
              >
                Military Background
              </button>
              <button
                onClick={() => setActiveTab('career')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'career'
                    ? 'border-b-2 border-navy text-navy'
                    : 'text-gray-500 hover:text-navy hover:border-navy'
                }`}
              >
                Career Preferences
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'skills'
                    ? 'border-b-2 border-navy text-navy'
                    : 'text-gray-500 hover:text-navy hover:border-navy'
                }`}
              >
                Skills & Expertise
              </button>
            </nav>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            {/* Military Background Tab */}
            {activeTab === 'military' && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold mb-6 text-navy">Military Background</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="form-input"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="form-input"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="rank" className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Rank Achieved
                    </label>
                    <input
                      id="rank"
                      type="text"
                      {...register('rank', { required: 'Rank is required' })}
                      className="form-input"
                      placeholder="E.g., Sergeant, Captain, etc."
                    />
                    {errors.rank && (
                      <p className="mt-1 text-sm text-red">{errors.rank.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
                      Branch of Service
                    </label>
                    <select
                      id="branch"
                      {...register('branch', { required: 'Branch is required' })}
                      className="form-input"
                    >
                      <option value="">Select branch</option>
                      <option value="Army">Army</option>
                      <option value="Navy">Navy</option>
                      <option value="Air Force">Air Force</option>
                      <option value="Marines">Marine Corps</option>
                      <option value="Coast Guard">Coast Guard</option>
                    </select>
                    {errors.branch && (
                      <p className="mt-1 text-sm text-red">{errors.branch.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="yearsOfService" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Service
                    </label>
                    <input
                      id="yearsOfService"
                      type="text"
                      {...register('yearsOfService', { required: 'Years of service is required' })}
                      className="form-input"
                      placeholder="E.g., 4, 10, etc."
                    />
                    {errors.yearsOfService && (
                      <p className="mt-1 text-sm text-red">{errors.yearsOfService.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                      Military Specialization/MOS
                    </label>
                    <input
                      id="specialization"
                      type="text"
                      {...register('specialization', { required: 'Specialization is required' })}
                      className="form-input"
                      placeholder="E.g., 11B Infantry, Intelligence Analyst, etc."
                    />
                    {errors.specialization && (
                      <p className="mt-1 text-sm text-red">{errors.specialization.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      {...register('location', { required: 'Location is required' })}
                      className="form-input"
                      placeholder="City, State"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red">{errors.location.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Education Level
                    </label>
                    <select
                      id="education"
                      {...register('education', { required: 'Education is required' })}
                      className="form-input"
                    >
                      <option value="">Select education level</option>
                      <option value="High School">High School</option>
                      <option value="Some College">Some College</option>
                      <option value="Associate's">Associate's Degree</option>
                      <option value="Bachelor's">Bachelor's Degree</option>
                      <option value="Master's">Master's Degree</option>
                      <option value="Doctorate">Doctorate</option>
                    </select>
                    {errors.education && (
                      <p className="mt-1 text-sm text-red">{errors.education.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                    About You & Your Military Experience
                  </label>
                  <textarea
                    id="about"
                    {...register('about', { 
                      required: 'Please share some information about your military background',
                      minLength: {
                        value: 50,
                        message: 'Please provide at least 50 characters',
                      }
                    })}
                    rows={5}
                    className="form-input"
                    placeholder="Describe your military experience, responsibilities, accomplishments, and any other relevant information..."
                  />
                  {errors.about && (
                    <p className="mt-1 text-sm text-red">{errors.about.message}</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveTab('career')}
                    className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    Skip for now
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('career')}
                    className="btn btn-primary"
                  >
                    Next: Career Preferences
                  </button>
                </div>
              </div>
            )}
            
            {/* Career Preferences Tab */}
            {activeTab === 'career' && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold mb-6 text-navy">Career Preferences</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="desiredRole" className="block text-sm font-medium text-gray-700 mb-1">
                      Desired Role
                    </label>
                    <input
                      id="desiredRole"
                      type="text"
                      {...register('desiredRole', { required: 'Desired role is required' })}
                      className="form-input"
                      placeholder="E.g., Project Manager, Software Engineer, etc."
                    />
                    {errors.desiredRole && (
                      <p className="mt-1 text-sm text-red">{errors.desiredRole.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="desiredIndustry" className="block text-sm font-medium text-gray-700 mb-1">
                      Desired Industry
                    </label>
                    <select
                      id="desiredIndustry"
                      {...register('desiredIndustry', { required: 'Desired industry is required' })}
                      className="form-input"
                    >
                      <option value="">Select industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail</option>
                      <option value="Government">Government</option>
                      <option value="Education">Education</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Transportation">Transportation & Logistics</option>
                      <option value="Construction">Construction</option>
                      <option value="Energy">Energy</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.desiredIndustry && (
                      <p className="mt-1 text-sm text-red">{errors.desiredIndustry.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="desiredLocation" className="block text-sm font-medium text-gray-700 mb-1">
                      Desired Location
                    </label>
                    <input
                      id="desiredLocation"
                      type="text"
                      {...register('desiredLocation')}
                      className="form-input"
                      placeholder="City, State or 'Remote'"
                    />
                  </div>
                  
                  <div className="flex items-center h-full pt-6">
                    <input
                      id="willingToRelocate"
                      type="checkbox"
                      {...register('willingToRelocate')}
                      className="h-4 w-4 text-navy focus:ring-navy border-gray-300 rounded"
                    />
                    <label htmlFor="willingToRelocate" className="ml-2 block text-sm text-gray-700">
                      I am willing to relocate
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab('military')}
                    className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('skills')}
                    className="btn btn-primary"
                  >
                    Next: Skills & Expertise
                  </button>
                </div>
              </div>
            )}
            
            {/* Skills & Expertise Tab */}
            {activeTab === 'skills' && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold mb-6 text-navy">Skills & Expertise</h2>
                
                <div className="mb-8">
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                    Skills (comma separated)
                  </label>
                  <textarea
                    id="skills"
                    {...register('skills', { 
                      required: 'Please add at least a few skills',
                    })}
                    rows={4}
                    className="form-input"
                    placeholder="E.g., Leadership, Project Management, Communication, Security, Operations, etc."
                  />
                  {errors.skills && (
                    <p className="mt-1 text-sm text-red">{errors.skills.message}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Enter skills from your military experience that would be valuable in civilian roles. 
                    Our AI will help translate these to civilian-equivalent skills.
                  </p>
                </div>
                
                <div className="bg-light-blue p-4 rounded-md mb-8">
                  <h3 className="text-lg font-medium text-navy mb-3">
                    AI-Suggested Civilian Skills
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Based on military roles similar to yours, these skills are highly valued by civilian employers:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Leadership', 'Crisis Management', 'Team Building', 'Strategic Planning', 
                      'Problem Solving', 'Decision Making', 'Process Improvement', 'Training & Development', 
                      'Resource Management', 'Risk Assessment'].map((skill, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-navy border border-navy">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-4 flex items-center text-navy font-medium text-sm"
                  >
                    <Check size={16} className="mr-1" /> Add suggested skills
                  </button>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveTab('career')}
                    className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary flex items-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Save size={18} className="mr-2" />
                    )}
                    Save Profile
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;