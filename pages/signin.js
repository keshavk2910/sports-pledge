import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { logo } from '../components/images/shared';

import {
  TeamManagementIcon,
  DedicatedSupportIcon,
  SecurePlatformIcon,
  RealTimeTrackingIcon,
  EmailIcon,
} from '../components/images/signin';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log('Sign in data:', data);
    // Handle sign in logic here
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden'>
        {/* Left Side - Sign In Form */}
        <div className='p-8 lg:p-12 flex flex-col justify-center'>
          <div className='max-w-md mx-auto w-full'>
            <Link href='/'>
              <img
                src={logo.src}
                alt='SportsPledge Logo'
                className='h-8 w-auto mb-8 mx-auto'
              />
            </Link>
            <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
              Sign In
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* Email Field */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <img
                      src={EmailIcon.src}
                      className='h-5 w-5 text-gray-400'
                    ></img>
                  </div>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email',
                      },
                    })}
                    type='email'
                    placeholder='coach@example.com'
                    className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400'
                  />
                </div>
                {errors.email && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-5 w-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                  </div>
                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    className='block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400'
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg
                      className='h-5 w-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      {showPassword ? (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.465 8.465M9.878 9.878L12 12m-3-3l6.364 6.364M21 12c-1.274 4.057-5.064 7-9.542 7m4.542-7L12 12m3-3L9.878 9.878'
                        />
                      ) : (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      )}
                    </svg>
                  </button>
                </div>
                {errors.password && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password */}
              <div className='text-right'>
                <Link
                  href='/forgot-password'
                  className='text-sm text-gray-600 hover:text-orange-600 underline'
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type='submit'
                className='w-full bg-[#EF6C2F] text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              >
                Sign In
              </button>

              {/* Sign Up Link */}
              <div className='text-center border-t border-gray-200 pt-4'>
                <p className='text-sm text-gray-600'>
                  Don&apos;t have a team account?{' '}
                  <Link
                    href='/register'
                    className='text-orange-600 hover:text-orange-700 font-medium underline'
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Coach Benefits */}
        <div className='bg-[#162855] text-white p-8 lg:p-12 flex flex-col justify-center'>
          <div className='max-w-md'>
            <h3 className='text-2xl font-bold mb-8'>Coach Benefits</h3>

            <div className='space-y-6'>
              {/* Team Management */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <img src={TeamManagementIcon.src} alt='Team Management' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1'>Team Management</h4>
                  <p className='text-sm text-white/80'>
                    Easily manage your team&apos;s fundraising campaigns
                  </p>
                </div>
              </div>

              {/* Secure Platform */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <img src={SecurePlatformIcon.src} alt='Secure Platform' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1'>Secure Platform</h4>
                  <p className='text-sm text-white/80'>
                    Safe and transparent fundraising for your team
                  </p>
                </div>
              </div>

              {/* Real-time Tracking */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <img
                    src={RealTimeTrackingIcon.src}
                    alt='Real-time Tracking'
                  />
                </div>
                <div>
                  <h4 className='font-semibold mb-1'>Real-time Tracking</h4>
                  <p className='text-sm text-white/80'>
                    Monitor your campaign progress instantly
                  </p>
                </div>
              </div>

              {/* Dedicated Support */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <img src={DedicatedSupportIcon.src} alt='Dedicated Support' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1'>Dedicated Support</h4>
                  <p className='text-sm text-white/80'>
                    Get help whenever you need it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
