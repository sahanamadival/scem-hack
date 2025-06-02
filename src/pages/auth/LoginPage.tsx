import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Shield, LogIn } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 animate-fade-in">
        <div className="flex flex-col items-center">
          <Shield size={48} className="text-navy mb-4" />
          <h2 className="text-center text-3xl font-bold text-navy">Sign in to your account</h2>
          <p className="mt-2 text-center text-gray-600">
            Welcome back to VetCareers
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
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
              <p className="mt-1 text-sm text-red">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
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
              <p className="mt-1 text-sm text-red">{errors.password.message}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-navy focus:ring-navy border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div>
              <Link to="/forgot-password" className="text-sm text-navy hover:text-navy/80">
                Forgot your password?
              </Link>
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
              <LogIn size={18} className="mr-2" />
            )}
            Sign in
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-navy font-medium">
                Sign up
              </Link>
            </p>
          </div>
          
          {/* Demo account info for testing */}
          <div className="mt-6 p-4 bg-light-blue rounded-md">
            <p className="text-sm text-navy">
              <strong>Demo Account:</strong><br />
              Email: veteran@example.com<br />
              Password: password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;