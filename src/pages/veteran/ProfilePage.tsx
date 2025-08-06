import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Check, Save, UserCircle, FileText, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  rank: string;
  branch: string;
  yearsOfService: string;
  specialization: string;
  militaryBackground: string;
  careerPreferences: string;
  skills: string;
  location: string;
  education: string;
}

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('military');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRankDropdown, setShowRankDropdown] = useState(false);

  const militaryRanks = [
    "Private", "Private First Class", "Specialist", "Corporal", 
    "Sergeant", "Staff Sergeant", "Sergeant First Class",
    "Master Sergeant", "First Sergeant", "Sergeant Major",
    "Second Lieutenant", "First Lieutenant", "Captain",
    "Major", "Lieutenant Colonel", "Colonel",
    "Brigadier General", "Major General", "Lieutenant General", "General"
  ];

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<ProfileFormData>();

  const onSubmit = async (data: ProfileFormData) => {
    setIsSubmitting(true);
    try {
      // Save to backend or state management
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBuildResume = () => {
    const formData = watch();
    navigate('/resume-builder', { 
      state: { 
        profileData: {
          ...formData,
          email: user?.email,
          name: `${formData.firstName} ${formData.lastName}`.trim() || user?.name
        }
      } 
    });
  };

  const selectRank = (rank: string) => {
    setValue('rank', rank);
    setShowRankDropdown(false);
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
              <h1 className="text-2xl font-bold text-white">
                {watch('firstName') || user.name || 'Welcome, Veteran'}
                {watch('lastName') && ` ${watch('lastName')}`}
              </h1>
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
                  activeTab === 'military' ? 'border-b-2 border-navy text-navy' : 'text-gray-500 hover:text-navy'
                }`}
              >
                Military Background
              </button>
              <button
                onClick={() => setActiveTab('career')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'career' ? 'border-b-2 border-navy text-navy' : 'text-gray-500 hover:text-navy'
                }`}
              >
                Career Preferences
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'skills' ? 'border-b-2 border-navy text-navy' : 'text-gray-500 hover:text-navy'
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
              <div className="animate-fade-in space-y-6">
                <h2 className="text-xl font-semibold mb-6 text-navy">Military Background</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rank*
                    </label>
                    <div 
                      className="w-full px-3 py-2 border rounded-md flex justify-between items-center cursor-pointer"
                      onClick={() => setShowRankDropdown(!showRankDropdown)}
                    >
                      <span>{watch('rank') || 'Select your rank'}</span>
                      <ChevronDown size={16} />
                    </div>
                    {showRankDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                        {militaryRanks.map((rank) => (
                          <div
                            key={rank}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => selectRank(rank)}
                          >
                            {rank}
                          </div>
                        ))}
                      </div>
                    )}
                    <input type="hidden" {...register('rank', { required: 'Rank is required' })} />
                    {errors.rank && (
                      <p className="text-red-500 text-xs mt-1">{errors.rank.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Branch of Service*
                    </label>
                    <select
                      {...register('branch', { required: 'Branch is required' })}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Select branch</option>
                      <option value="Army">Army</option>
                      <option value="Navy">Navy</option>
                      <option value="Air Force">Air Force</option>
                      <option value="Marines">Marine Corps</option>
                      <option value="Coast Guard">Coast Guard</option>
                    </select>
                    {errors.branch && (
                      <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Service*
                    </label>
                    <input
                      {...register('yearsOfService', { required: 'Years of service is required' })}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="E.g., 4, 10, etc."
                    />
                    {errors.yearsOfService && (
                      <p className="text-red-500 text-xs mt-1">{errors.yearsOfService.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Military Specialization/MOS*
                    </label>
                    <input
                      {...register('specialization', { required: 'Specialization is required' })}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="E.g., 11B Infantry, Intelligence Analyst, etc."
                    />
                    {errors.specialization && (
                      <p className="text-red-500 text-xs mt-1">{errors.specialization.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Military Background Description*
                  </label>
                  <textarea
                    {...register('militaryBackground', { 
                      required: 'Please describe your military background',
                      minLength: {
                        value: 50,
                        message: 'Please provide at least 50 characters'
                      }
                    })}
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Describe your military experience, responsibilities, accomplishments..."
                  />
                  {errors.militaryBackground && (
                    <p className="text-red-500 text-xs mt-1">{errors.militaryBackground.message}</p>
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
              <div className="animate-fade-in space-y-6">
                <h2 className="text-xl font-semibold mb-6 text-navy">Career Preferences</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Career Preferences Description*
                  </label>
                  <textarea
                    {...register('careerPreferences', { 
                      required: 'Please describe your career preferences',
                      minLength: {
                        value: 50,
                        message: 'Please provide at least 50 characters'
                      }
                    })}
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Describe your career goals, desired industries, preferred work environment..."
                  />
                  {errors.careerPreferences && (
                    <p className="text-red-500 text-xs mt-1">{errors.careerPreferences.message}</p>
                  )}
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
              <div className="animate-fade-in space-y-6">
                <h2 className="text-xl font-semibold mb-6 text-navy">Skills & Expertise</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills (comma separated)*
                  </label>
                  <textarea
                    {...register('skills', { 
                      required: 'Please add at least a few skills',
                    })}
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="E.g., Leadership, Project Management, Communication, Security, Operations, etc."
                  />
                  {errors.skills && (
                    <p className="text-red-500 text-xs mt-1">{errors.skills.message}</p>
                  )}
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
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleBuildResume}
                    className="w-full btn btn-primary flex items-center justify-center"
                  >
                    <FileText size={18} className="mr-2" />
                    Build My Resume
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