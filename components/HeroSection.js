import Link from 'next/link';
import Navigation from './Navigation';
import { heroImage } from './images/homepage';

export default function HeroSection() {
  return (
    <section className='relative'>
      <div className='relative'>
        <div className='absolute inset-0'>
          <div className='absolute left-0 top-0 w-[60%] h-full bg-[#102250]'></div>
          <div className='absolute right-0 top-0 w-[40%] h-full bg-orange-500'></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-8'>
          <Navigation />
          <div className='grid grid-cols-1 lg:grid-cols-5 min-h-[600px] items-center pt-0'>
            <div className='text-center lg:text-left max-w-lg lg:col-span-2'>
              <h1 className='text-[84px] font-medium text-white mb-6 font-manrope leading-tight'>
                Gamify Your Fundraising
              </h1>
              <p className='text-base text-white/90 mb-8 leading-relaxed'>
                Fund your team with every shot, lap, or goal. Create stat-based
                or thon fundraisers that engage your community like never
                before.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Link href="/donate/1">
                  <button className='px-6 py-3 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2'>
                    Start Fundraisers
                    <svg
                      className='w-4 h-4'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                    >
                      <path d='M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zM7 4h2v4h4v2H9v4H7V10H3V8h4V4z' />
                    </svg>
                  </button>
                </Link>
                <Link href="/find-your-team">
                  <button className='px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2'>
                    Browse Teams
                    <svg
                      className='w-4 h-4'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex items-center justify-center lg:col-span-3'>
              <img
                className='w-auto h-auto max-w-full'
                src={heroImage.src}
                alt='SportsPledge Hero Section'
              />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0'>
          <svg
            className='w-full h-20 text-white'
            viewBox='0 0 1200 80'
            preserveAspectRatio='none'
          >
            <path d='M0,80 L1200,80 L1200,0 L0,80 Z' fill='currentColor'></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
