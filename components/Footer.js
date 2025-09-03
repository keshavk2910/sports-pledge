import { iconTwitter as twitterIcon, iconInstagram as instagramIcon, iconYoutube as youtubeIcon, iconLinkedin as linkedinIcon } from './images/shared';

export default function Footer() {
  return (
    <footer className="bg-[#F97316] text-white relative pb-20 pt-11">
      <svg className="absolute -top-28 left-0 w-full h-28" viewBox="0 0 100 28" preserveAspectRatio="none">
        <defs>
          <clipPath id="footerClip">
            <path d="M0,28 L100,0 L100,28 L0,28 Z"></path>
          </clipPath>
        </defs>
        <rect width="100" height="28" fill="#F97316" clipPath="url(#footerClip)"></rect>
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">SportsPledge</span>
            </div>
            <p className="text-white/90 max-w-md">Empowering sports teams to reach their fundraising goals through innovative stat-based and thon-based campaigns.</p>
            <div className="flex space-x-4 mt-6">
              <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" href="#">
                <img className="w-5 h-5" src={twitterIcon.src} alt="X" />
              </a>
              <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" href="#">
                <img className="w-5 h-5" src={instagramIcon.src} alt="Instagram" />
              </a>
              <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" href="#">
                <img className="w-5 h-5" src={youtubeIcon.src} alt="Youtube" />
              </a>
              <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" href="#">
                <img className="w-5 h-5" src={linkedinIcon.src} alt="Linkedin" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a className="text-white/80 hover:text-white transition-colors" href="#">Find your Team</a></li>
              <li><a className="text-white/80 hover:text-white transition-colors" href="/donation">Create Fundraiser</a></li>
              <li><a className="text-white/80 hover:text-white transition-colors" href="/how-it-works">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a className="text-white/80 hover:text-white transition-colors" href="/about">About</a></li>
              <li><a className="text-white/80 hover:text-white transition-colors" href="/about#contact-form">Contact</a></li>
              <li><a className="text-white/80 hover:text-white transition-colors" href="#">FAQ</a></li>
              <li><a className="text-white/80 hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a className="text-white/80 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}