import Link from 'next/link';
import { logo } from './images/shared';

export default function Navigation() {
  return (
    <header className='relative z-10 bg-white rounded-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <Link href='/' className='cursor-pointer'>
              <img
                className='h-8 w-auto'
                src={logo.src}
                alt='SportsPledge Logo'
              />
            </Link>
          </div>
          <nav className='hidden md:flex space-x-3.5'>
            <Link
              className='text-gray-700 hover:text-blue-400 transition-colors'
              href='/signin'
            >
              Start a Campaign
            </Link>
            <Link
              className='text-gray-700 hover:text-blue-400 transition-colors'
              href='/find-your-team'
            >
              Find your Team
            </Link>
            {/* <Link
              className='text-gray-700 hover:text-blue-400 transition-colors'
              href='#'
            >
              Success Stories
            </Link> */}
            <Link
              className='text-gray-700 hover:text-blue-400 transition-colors'
              href='/how-it-works'
            >
              How It Works
            </Link>
            <Link
              className='text-gray-700 hover:text-blue-400 transition-colors'
              href='/about'
            >
              About Us
            </Link>
            <Link
              className='text-gray-700 hover:text-blue-400 transition-colors'
              href='/about#contact-form'
            >
              Contact
            </Link>
          </nav>
          <div className='flex items-center space-x-4'>
            <Link href='/signin'>
              <button className='px-4 py-2 text-[#3D9ED8] border border-[#3D9ED8] rounded-lg hover:bg-[#3D9ED8] hover:text-white transition-colors cursor-pointer'>
                Sign in
              </button>
            </Link>
            <Link href='/register'>
              <button className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors cursor-pointer'>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
