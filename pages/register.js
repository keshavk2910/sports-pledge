import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { logo } from '../components/images/shared';

import {
  TeamManagementIcon,
  DedicatedSupportIcon,
  SecurePlatformIcon,
  RealTimeTrackingIcon,
} from '../components/images/signin';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch('password', '');

  const onSubmit = (data) => {
    console.log('Registration data:', data);
    // Handle registration logic here
  };

  const sports = [
    'Football',
    'Basketball',
    'Soccer',
    'Baseball',
    'Softball',
    'Track & Field',
    'Swimming',
    'Tennis',
    'Golf',
    'Volleyball',
    'Wrestling',
    'Cross Country',
    'Hockey',
    'Lacrosse',
    'Dance',
    'Cheerleading',
    'Other',
  ];

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden'>
        {/* Left Side - Sign Up Form */}
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
              Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              {/* Name Fields */}
              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    First Name
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        className='h-4 w-4 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                    <input
                      {...register('firstName', {
                        required: 'First name is required',
                      })}
                      type='text'
                      placeholder='John'
                      className='block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                    />
                  </div>
                  {errors.firstName && (
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Last Name
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        className='h-4 w-4 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                    <input
                      {...register('lastName', {
                        required: 'Last name is required',
                      })}
                      type='text'
                      placeholder='Smith'
                      className='block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                    />
                  </div>
                  {errors.lastName && (
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
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
                    className='block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                  />
                </div>
                {errors.email && (
                  <p className='mt-1 text-xs text-red-600'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
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
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    className='block w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg
                      className='h-4 w-4 text-gray-400'
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
                  <p className='mt-1 text-xs text-red-600'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor='confirmPassword'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Confirm Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
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
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) =>
                        value === password || 'Passwords do not match',
                    })}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    className='block w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <svg
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      {showConfirmPassword ? (
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
                {errors.confirmPassword && (
                  <p className='mt-1 text-xs text-red-600'>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Zip Code */}
              <div>
                <label
                  htmlFor='zipCode'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Zip Code
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <input
                    {...register('zipCode')}
                    type='text'
                    placeholder='73001'
                    className='block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                  />
                </div>
              </div>

              {/* Team Name */}
              <div>
                <label
                  htmlFor='teamName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Team Name
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </div>
                  <input
                    {...register('teamName')}
                    type='text'
                    placeholder='Wildcats'
                    className='block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 text-sm'
                  />
                </div>
              </div>

              {/* Sport */}
              <div>
                <label
                  htmlFor='sport'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Sport
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <select
                    {...register('sport')}
                    className='block w-full pl-9 pr-8 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm appearance-none bg-white'
                  >
                    <option value='basketball'>Basketball</option>
                    {sports.map((sport) => (
                      <option key={sport} value={sport.toLowerCase()}>
                        {sport}
                      </option>
                    ))}
                  </select>
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className='flex items-start'>
                <input
                  {...register('acceptTerms', {
                    required: 'You must agree to the terms',
                  })}
                  type='checkbox'
                  className='h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-0.5'
                />
                <label className='ml-2 block text-sm text-gray-700'>
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              {errors.acceptTerms && (
                <p className='text-xs text-red-600'>
                  {errors.acceptTerms.message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-[#EF6C2F] text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm'
              >
                Sign Up
              </button>

              {/* Sign In Link */}
              <div className='text-center border-t border-gray-200 pt-4'>
                <p className='text-sm text-gray-600'>
                  Already have an account?{' '}
                  <Link
                    href='/signin'
                    className='text-orange-600 hover:text-orange-700 font-medium underline'
                  >
                    Sign In
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
                    Easily manage your team's fundraising campaigns
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
