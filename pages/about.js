import Layout from '../components/Layout';
import AboutHero from '../components/AboutHero';
import CallToAction from '../components/CallToAction';
import { useForm } from 'react-hook-form';
import { about1Image, aboutPeople1, aboutPeople2, aboutPeople3, locationIcon, emailIcon, callIcon, facebookIcon, twitterIcon, instagramIcon, linkedinIcon, youtubeIcon } from '../components/images/about';

export default function About() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form data:', data);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <AboutHero />

        {/* About Content Section */}
        <section>
          <div className="m-8 lg:m-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div className="flex justify-center lg:justify-end px-4 lg:px-0">
              <img 
                className="rounded-lg" 
                src={about1Image.src} 
                alt="about" 
              />
            </div>
            <div className="space-y-6 px-4 lg:px-0 text-center lg:text-left">
              <h1 className="text-4xl lg:text-[36px] font-bold text-black leading-tight">How It Works</h1>
              <p className="text-gray-700 text-[16px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, 
                nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
              </p>
              <p className="text-gray-700 text-[16px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Sed malesuada, augue ac cursus tempor, justo erat tincidunt augue, quis pretium dolor nisl id justo. 
                Vivamus luctus, nisl ut cursus tincidunt, elit urna maximus quam, at cursus justo ex in elit.
              </p>
              <p className="text-gray-700 text-[16px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Today, SportsPledge serves thousands of teams across the country, providing not just a fundraising platform 
                but a community where athletes, coaches, parents, and supporters come together to ensure that financial 
                barriers never stand in the way of athletic dreams.
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="bg-[#FBAA1A] flex flex-col items-center min-h-[850px] pt-32" style={{clipPath: 'polygon(0px 20%, 100% 0px, 100% 80%, 0px 100%)'}}>
            <h1 className="text-white text-4xl font-bold mb-8">Meet Our Team</h1>
            <div className="flex flex-col md:flex-row gap-8 px-4 md:px-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-100 p-3">
                <img className="object-cover" src={aboutPeople1.src} alt="Sarah Johnson" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">Sarah Johnson</h2>
                  <p className="text-gray-600 font-medium">Founder & CEO</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Former college athlete with 15+ years in sports management and a passion for community development.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-100 p-3">
                <img className="object-cover" src={aboutPeople2.src} alt="Sarah Johnson" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">Sarah Johnson</h2>
                  <p className="text-gray-600 font-medium">Founder & CEO</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Former college athlete with 15+ years in sports management and a passion for community development.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-100 p-3">
                <img className="object-cover" src={aboutPeople3.src} alt="Sarah Johnson" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">Sarah Johnson</h2>
                  <p className="text-gray-600 font-medium">Founder & CEO</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Former college athlete with 15+ years in sports management and a passion for community development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center mt-12 mb-24">
            <div id="contact-form" className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="flex flex-col gap-6">
                <h1 className="text-black text-3xl font-bold">Contact Information</h1>
                
                <div className="flex items-start gap-4">
                  <img src={locationIcon.src} alt="Location" />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-gray-800 -m-1">Office</h3>
                    <p className="text-gray-600">123 Main Street, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={emailIcon.src} alt="Email" />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-gray-800 -m-1">Email Us</h3>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={callIcon.src} alt="Call" />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-gray-800 -m-1.5">Call Us</h3>
                    <p className="text-gray-600">+123 456 7890</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm PT</p>
                  </div>
                </div>

                <h2 className="text-black text-2xl font-bold mt-6">Follow Us</h2>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1E8] hover:bg-[#FFE4D5] transition">
                    <img src={facebookIcon.src} alt="Facebook" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1E8] hover:bg-[#FFE4D5] transition">
                    <img src={twitterIcon.src} alt="Twitter" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1E8] hover:bg-[#FFE4D5] transition">
                    <img src={instagramIcon.src} alt="Instagram" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1E8] hover:bg-[#FFE4D5] transition">
                    <img src={linkedinIcon.src} alt="LinkedIn" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1E8] hover:bg-[#FFE4D5] transition">
                    <img src={youtubeIcon.src} alt="YouTube" />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <h1 className="text-black text-3xl font-bold mb-4 text-center">Send Us a Message</h1>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col w-1/2">
                      <label className="text-gray-700 font-medium mb-1">First Name</label>
                      <input 
                        {...register('firstName', { required: true })}
                        placeholder="First Name" 
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EF6C2F]" 
                        type="text" 
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <label className="text-gray-700 font-medium mb-1">Last Name</label>
                      <input 
                        {...register('lastName', { required: true })}
                        placeholder="Last Name" 
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EF6C2F]" 
                        type="text" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-1">Email</label>
                    <input 
                      {...register('email', { required: true })}
                      placeholder="Email" 
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EF6C2F]" 
                      type="email" 
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-1">Message</label>
                    <textarea 
                      {...register('message', { required: true })}
                      rows="5" 
                      placeholder="Message" 
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EF6C2F]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-[#EF6C2F] text-white font-semibold py-2 rounded-md hover:bg-[#e65d1a] transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </Layout>
  );
}