import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Shield, UserPlus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'veteran' | 'employer' | 'mentor';
}

const RegisterPage: React.FC = () => {
  const { register, isLoading } = useAuth();
  const { register: registerForm, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const [role, setRole] = useState<'veteran' | 'employer' | 'mentor'>('veteran');

  const password = watch('password');

  // State for toggling resume form
  const [showResumeForm, setShowResumeForm] = useState(false);

  // Resume form state
  const [resumeName, setResumeName] = useState('');
  const [resumeDesc, setResumeDesc] = useState('');
  const [resumeSkills, setResumeSkills] = useState('');
  const [resumeServices, setResumeServices] = useState('');

  const onSubmit = async (data: RegisterFormData) => {
    await register(data.name, data.email, data.password, data.role);
  };

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      resumeName,
      resumeDesc,
      resumeSkills,
      resumeServices,
    });

    alert('Resume updated successfully!');

    // Reset fields and close form
    setResumeName('');
    setResumeDesc('');
    setResumeSkills('');
    setResumeServices('');
    setShowResumeForm(false);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 animate-fade-in">

        <div className="flex flex-col items-center">
          <Shield size={48} className="text-navy mb-4" />
          <h2 className="text-center text-3xl font-bold text-navy">Create your account</h2>
          <p className="mt-2 text-center text-gray-600">
            Join VetCareers to start your career transition
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="name"
              type="text"
              {...registerForm('name', {
                required: 'Name is required',
              })}
              className="form-input mt-1"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...registerForm('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="form-input mt-1"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...registerForm('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className="form-input mt-1"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...registerForm('confirmPassword', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match',
              })}
              className="form-input mt-1"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I am a:
            </label>
            <div className="grid grid-cols-3 gap-4">
              <div
                className={`py-3 px-4 border rounded-md text-center cursor-pointer transition-colors ${
                  role === 'veteran'
                    ? 'border-navy bg-light-blue text-navy'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setRole('veteran')}
              >
                <input
                  type="radio"
                  {...registerForm('role')}
                  value="veteran"
                  className="sr-only"
                  checked={role === 'veteran'}
                  onChange={() => setRole('veteran')}
                />
                Veteran
              </div>
              <div
                className={`py-3 px-4 border rounded-md text-center cursor-pointer transition-colors ${
                  role === 'employer'
                    ? 'border-navy bg-light-blue text-navy'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setRole('employer')}
              >
                <input
                  type="radio"
                  {...registerForm('role')}
                  value="employer"
                  className="sr-only"
                  checked={role === 'employer'}
                  onChange={() => setRole('employer')}
                />
                Employer
              </div>
              <div
                className={`py-3 px-4 border rounded-md text-center cursor-pointer transition-colors ${
                  role === 'mentor'
                    ? 'border-navy bg-light-blue text-navy'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setRole('mentor')}
              >
                <input
                  type="radio"
                  {...registerForm('role')}
                  value="mentor"
                  className="sr-only"
                  checked={role === 'mentor'}
                  onChange={() => setRole('mentor')}
                />
                Mentor
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn btn-primary flex justify-center items-center"
          >
            {isLoading ? (
              <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <UserPlus size={18} className="mr-2" />
            )}
            Create account
          </button>
        </form>

        {/* Build My Resume Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowResumeForm(!showResumeForm)}
            className="btn btn-secondary px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            {showResumeForm ? 'Cancel Build My Resume' : 'Build My Resume'}
          </button>
        </div>

        {/* Resume Build Form */}
        {showResumeForm && (
          <form
            onSubmit={handleResumeSubmit}
            className="max-w-md mx-auto mt-6 p-6 bg-white rounded-md shadow-md space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Build My Resume</h3>

            <input
              type="text"
              placeholder="Resume Name"
              value={resumeName}
              onChange={e => setResumeName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
            <textarea
              placeholder="Description"
              value={resumeDesc}
              onChange={e => setResumeDesc(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
              rows={3}
            />
            <input
              type="text"
              placeholder="Skills (comma separated)"
              value={resumeSkills}
              onChange={e => setResumeSkills(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Services"
              value={resumeServices}
              onChange={e => setResumeServices(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />

            <button
              type="submit"
              className="w-full btn btn-primary mt-4"
            >
              Submit Resume
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
