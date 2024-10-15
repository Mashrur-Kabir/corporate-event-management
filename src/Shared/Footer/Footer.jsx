import logo from '../../../src/assets/icons/project_logo/paste-pink.png';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { LuMailCheck } from "react-icons/lu";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

import '../Navbar/Navbar.css'

const Footer = () => {
    return (
        <div className='bg-indigo-950'>
            <div className='flex flex-col md:flex-row items-start justify-between py-6 px-4 md:px-10 cursor-pointer max-w-7xl mx-auto'>
                {/* about and follow us */}
                <div className='space-y-6 max-w-lg'>
                    <div className="flex items-center gap-3 mb-8">
                        <img src={logo} alt="Corporex Logo" className="w-11 h-11" />
                        <h2 className="font-ubuntu font-semibold text-2xl md:text-3xl text-white custom-underline">Corporex</h2>
                    </div>
                    <p className='font-poppins text-gray-400 text-sm md:text-base'>
                        We specialize in hosting exceptional corporate events, offering a wide range of services tailored to meet the unique needs of each client. We excel in delivering memorable events across various industries. Our commitment to innovation and attention to detail ensures successful outcomes.
                    </p>
                    <div className='flex items-center gap-2'>
                        <a className='bg-slate-600 p-2 hover:bg-blue-600 hover:animate-rotateTwice transition-colors' href="https://www.facebook.com/">
                            <FaFacebookF className='text-gray-300 text-lg md:text-xl' />
                        </a>
                        <a className='bg-slate-600 p-2 hover:bg-sky-500 hover:animate-rotateTwice transition-colors' href="https://x.com/">
                            <IoLogoTwitter className='text-gray-300 text-lg md:text-xl' />
                        </a>
                        <a className='bg-slate-600 p-2 hover:bg-red-700 hover:animate-rotateTwice transition-colors' href="https://www.pinterest.com/">
                            <FaPinterest className='text-gray-300 text-lg md:text-xl' />
                        </a>
                        <a className='bg-slate-600 p-2 hover:bg-red-500 hover:animate-rotateTwice transition-colors' href="https://www.youtube.com/">
                            <FaYoutube className='text-gray-300 text-lg md:text-xl' />
                        </a>
                        <a className='bg-slate-600 p-2 hover:bg-pink-600 hover:animate-rotateTwice transition-colors' href="https://dribbble.com/">
                            <IoBasketballOutline className='text-gray-300 text-lg md:text-xl' />
                        </a>
                    </div>
                </div>

                {/* contact us */}
                <div className="flex flex-col items-start gap-5 cursor-pointer mt-8 md:mt-0">
                    <h2 className="font-ubuntu font-semibold text-lg md:text-2xl text-white custom-underline ml-1">Contact Us</h2>
                    <p className='font-poppins font-medium flex items-center gap-3 text-white hover:text-custom-pink text-sm md:text-base'>
                        <IoIosTimer className='text-2xl md:text-3xl' />Mon - Fri: 09:00 - 19:00
                    </p>
                    <p className='font-poppins font-medium flex items-center gap-3 text-white hover:text-custom-pink text-sm md:text-base'>
                        <LuPhoneCall className='text-2xl md:text-3xl' />+1-345-5678-77
                    </p>
                    <p className='font-poppins font-medium flex items-center gap-3 text-white hover:text-custom-pink text-sm md:text-base'>
                        <LuMailCheck className='text-2xl md:text-3xl' />support@example.com
                    </p>
                    <p className='font-poppins font-medium flex items-center gap-3 text-white hover:text-custom-pink text-sm md:text-base'>
                        <BsGlobeAsiaAustralia className='text-2xl md:text-3xl' />13005 Greenville Avenue <br />
                        California, TX 70240
                    </p>
                </div>
            </div>

            {/* Rights reserved section */}
            <div className='bg-purple-900 text-center py-4'>
                <p className='text-gray-400 font-poppins text-sm md:text-base'>&copy; {new Date().getFullYear()} Corporex. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
