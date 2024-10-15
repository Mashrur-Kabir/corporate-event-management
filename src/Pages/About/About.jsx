import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './About.css';
import user from '../../assets/icons/project_logo/users (1).png';
import ux from '../../assets/icons/project_logo/ux.png';
import innovation from '../../assets/icons/project_logo/innovation.png';
import { Link } from 'react-router-dom';
import { FaHandPointLeft } from 'react-icons/fa';
import team from '../../assets/images/team.jpg';
import { david, alice, sarah } from '../../AssetExport/Assets';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show the SweetAlert notification
    Swal.fire({
      title: 'Thank you!',
      text: 'Your feedback has been successfully submitted.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#4f46e5',
    });
    
    // You can also clear the form here if needed
    e.target.reset();
  };

  /* AOS */
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize with 1-second animation duration
  }, []);

  return (
    <div className="about-container py-10">
      {/* About Us Section */}
      <section className="about-us text-center py-12 font-poppins" data-aos="fade-up">
        <h2 className="text-indigo-950 text-4xl font-bold mb-6 font-ubuntu" data-aos="zoom-in">About Us</h2>
        <p className="text-lg text-gray-500 mb-8">
            Welcome to our platform! We&apos;re dedicated to bringing the best experience to our users by offering top-notch services and events.
            Not a member yet? Register <Link to="/register" className="hover:underline hover:text-custom-blue inline-flex items-center">
            <span>here</span> <FaHandPointLeft className="ml-2" />
            </Link>
        </p>
      </section>

      {/* Achievements Section */}
     <section className="rounded-md bg-gradient-to-r from-slate-100 to-gray-300 py-20 my-24 font-poppins" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center mb-10 font-ubuntu text-indigo-950" data-aos="zoom-in">
            Our Achievements
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center p-12" data-aos="slide-right">
            <div className="achievement-card p-10 border rounded-lg shadow-md">
                <img src={innovation} alt="Award 1" className="mx-auto mb-6" />
                <h3 className="text-xl font-bold py-2">Top Innovator 2024</h3>
                <p className="text-gray-500">Awarded for outstanding innovation in event management.</p>
            </div>
            <div className="achievement-card p-10 border rounded-lg shadow-md">
                <img src={ux} alt="Award 2" className="mx-auto mb-6" />
                <h3 className="text-xl font-bold py-2">Best User Experience</h3>
                <p className="text-gray-500">Recognized for creating user-friendly interfaces and experiences.</p>
            </div>
            <div className="achievement-card p-10 border rounded-lg shadow-md">
                <img src={user} alt="Award 3" className="mx-auto mb-6" />
                <h3 className="text-xl font-bold py-2">100K+ Users</h3>
                <p className="text-gray-500">Proudly serving over 100,000 users worldwide.</p>
            </div>
        </div>
     </section>


    {/* Team Section */}
    <section className="bg-gradient-to-r from-gray-200 to-pink-100 team-cartoon my-20 py-20 font-poppins" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center mb-10 font-ubuntu text-indigo-950" data-aos="zoom-in">Our Team</h2>

        {/* <!-- Team Introduction Section --> */}
        <div className="cartoon-content text-center mb-12">
            <img src={team} alt="team" className="mb-4 mx-auto w-2/3 sm:w-1/2 lg:w-1/3" />
            <p className="my-10 text-lg text-gray-500 px-6 lg:px-48">
            Our dedicated and talented team of experts are here to guide you every step of the way. <br /> We believe in collaboration, innovation, and delivering the best results.
            </p>
        </div>

        {/* <!-- Team Members Cards --> */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-12 lg:px-20 cursor-pointer">
                {/* <!-- Member 1 --> */}
            <div className="bg-gray-50 team-member md:col-span-2 md:text-center md:px-24 lg:text-left lg:px-10 lg:col-span-1 shadow-lg rounded-lg p-10 transform hover:scale-105 transition-transform relative">
                <img src={alice} alt="Member 1" className="w-32 h-32 object-cover rounded-full mx-auto my-4 border-4 border-custom-pink" />
                <h3 className="text-xl font-semibold text-indigo-950 pt-4">Alice Johnson</h3>
                <p className="text-sm text-gray-600 mb-4">CEO & Founder</p>
                <p className="text-gray-500">
                    Alice is the driving force behind our company, with over 15 years of experience in event management and corporate leadership.
                </p>

                {/* Social Media Icons */}
                <div className="social-icons flex absolute right-10 top-[13rem] transform -translate-y-1/2 space-x-4 opacity-0 transition-opacity duration-300">
                    <a href="https://instagram.com" className="hover:text-pink-500 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faInstagram} />
                    </a>
                    <a href="https://facebook.com" className="hover:text-blue-500 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-400 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faTwitter} />
                    </a>
                </div>
            </div>

                {/* <!-- Member 2 --> */}
            <div className="bg-gray-50 team-member shadow-lg rounded-lg p-10 transform hover:scale-105 transition-transform relative">
                <img src={david} alt="Member 2" className="w-32 h-32 object-cover rounded-full mx-auto my-4 border-4 border-custom-pink" />
                <h3 className="text-xl font-semibold text-indigo-950 pt-4">David Smith</h3>
                <p className="text-sm text-gray-600 mb-4">Head of Operations</p>
                <p className="text-gray-500">
                    With a knack for logistics and operational excellence, David ensures every event runs smoothly from start to finish.
                </p>

                {/* Social Media Icons */}
                <div className="social-icons flex absolute right-10 top-[13rem] transform -translate-y-1/2 space-x-4 opacity-0 transition-opacity duration-300">
                    <a href="https://instagram.com" className="hover:text-pink-500 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faInstagram} />
                    </a>
                    <a href="https://facebook.com" className="hover:text-blue-500 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-400 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faTwitter} />
                    </a>
                </div>
            </div>

                {/* <!-- Member 3 --> */}
            <div className="bg-gray-50 team-member shadow-lg rounded-lg p-10 transform hover:scale-105 transition-transform relative">
                <img src={sarah} alt="Member 3" className="w-32 h-32 object-cover rounded-full mx-auto my-4 border-4 border-custom-pink" />
                <h3 className="text-xl font-semibold text-indigo-950 pt-4">Sarah Williams</h3>
                <p className="text-sm text-gray-600 mb-4">Creative Director</p>
                <p className="text-gray-500">
                    Sarah brings creativity and vision to every project, ensuring that our events are as unique as they are unforgettable.
                </p>

                {/* Social Media Icons */}
                <div className="social-icons flex absolute right-10 top-[13rem] transform -translate-y-1/2 space-x-4 opacity-0 transition-opacity duration-300">
                    <a href="https://instagram.com" className="hover:text-pink-500 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faInstagram} />
                    </a>
                    <a href="https://facebook.com" className="hover:text-blue-500 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-400 transition-transform">
                        <FontAwesomeIcon className='w-5 h-5' icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>
    </section>

      {/* Location Section */}
      <section className="location py-16" data-aos="zoom-out">
      <h2 className="text-4xl font-semibold text-center mb-10 font-ubuntu text-indigo-950">Find Us On Map</h2>
        <div className="google-map mx-auto shadow-lg rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey="AIzaSyCU0ZEZnhsm5zRdK1E5YpCk3tqdmDY7yE0">
            <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={{ lat: 40.712776, lng: -74.005974 }}
                zoom={10}
            >
                <Marker position={{ lat: 40.712776, lng: -74.005974 }} />
            </GoogleMap>
        </LoadScript>
        </div>
      </section>

      {/* Feedback/contact Section */}
      <section className="contact-us py-10 sm:py-16 md:py-20 bg-gradient-to-r from-fuchsia-100 to-slate-100" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10 font-ubuntu text-indigo-950">
            Feedback?
        </h2>
        <form className="w-full max-w-lg mx-auto px-4 sm:px-0" onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-6">
            <label htmlFor="name" className="block text-lg sm:text-xl font-medium text-gray-700 font-poppins">
                Name
            </label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div className="mb-4 sm:mb-6">
            <label htmlFor="email" className="block text-lg sm:text-xl font-medium text-gray-700">
                Email
            </label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div className="mb-4 sm:mb-6">
            <label htmlFor="message" className="block text-lg sm:text-xl font-medium text-gray-700">
                Message
            </label>
            <textarea id="message" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-3 text-lg sm:text-xl bg-custom-blue text-white rounded-md shadow-md font-ubuntu active:scale-95 transition duration-200">
            Submit
            </button>
        </form>
      </section>


    </div>
  );
};

export default About;
