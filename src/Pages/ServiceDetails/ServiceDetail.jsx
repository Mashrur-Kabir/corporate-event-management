import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for dropdown
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'; // Custom slider arrows
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Shared/Navbar/Navbar.css'
import '@fortawesome/fontawesome-free/css/all.css';



const ServiceDetail = () => {
    const { id } = useParams();
    const datas = useLoaderData();

    const serviceData = datas.find(data => data.id === parseInt(id));

    const { name, image, price, details } = serviceData;
    const { description, duration, location, capacity, agenda, includes, event_pictures, special_guests } = details;

    const [showAgenda, setShowAgenda] = useState(false);
    const [showIncludes, setShowIncludes] = useState(false);

    // Custom arrows for the slider
    const PrevArrow = ({ onClick }) => (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <MdArrowBackIos className="text-3xl text-gray-600 hover:text-gray-800" />
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <MdArrowForwardIos className="text-3xl text-gray-600 hover:text-gray-800" />
        </div>
    );

    // PropTypes validation for the arrow components
    PrevArrow.propTypes = {
        onClick: PropTypes.func,
    };

    NextArrow.propTypes = {
        onClick: PropTypes.func,
    };

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="p-6 my-28">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 cursor-pointer">
                    <h2 className="text-4xl font-bold text-blue-950 font-ubuntu custom-underline">{name}</h2>
                </div>

                {/* Main Service Image */}
                <img src={image} alt="Service" className="w-full h-auto object-contain rounded-lg mb-8" />
            </div>

            <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-200 to-gray-50 p-10 rounded-lg shadow-lg mb-24 font-poppins">
                <div className="flex items-center gap-5">
                    <h3 className="text-3xl font-semibold font-ubuntu cursor-pointer">Price: ${price}</h3>
                    <button className="relative px-6 py-3 md:px-7 md:py-3 rounded-lg bg-custom-blue text-white font-poppins overflow-hidden group">
                        <span className="relative z-20 transition-colors duration-300 ease-in-out group-hover:text-custom-blue">
                            Buy Now
                        </span>
                        <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0 z-10"></span>
                        <span className="absolute inset-0 bg-custom-blue transition-transform duration-300 ease-in-out transform group-hover:-translate-x-full z-0"></span>
                    </button>
                </div>
                <p className="mt-6 text-gray-600 font-medium">{description}</p>
                <div className="mt-6 space-y-2 cursor-pointer">
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Capacity:</strong> {capacity}</p>
                </div>
            </div>

            {/* Slider for Event Pictures */}
            <div className="max-w-7xl mx-auto mb-20 cursor-pointer">
                <div>
                    <Slider {...sliderSettings}>
                        {event_pictures?.map((picture, index) => (
                            <div key={index}>
                                <img src={picture} alt={`Event ${index + 1}`} className="w-full h-auto max-h-[500px] object-contain rounded-lg" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Agenda Dropdown */}
            {agenda?.length > 0 && (
                <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-200 to-pink-100 p-6 rounded-lg shadow-lg mb-12 font-poppins">
                    <button
                        onClick={() => setShowAgenda(!showAgenda)}
                        className="w-full flex justify-between items-center text-xl text-left font-semibold focus:outline-none"
                    >
                        Agenda
                        {showAgenda ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {showAgenda && (
                        <ul className="mt-4 pl-4 list-disc">
                            {agenda.map((item, index) => (
                                <li key={index} className="py-2 text-gray-700">{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {/* Includes Dropdown */}
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-200 to-pink-100 p-6 rounded-lg shadow-md mb-44 font-poppins">
                <button
                    onClick={() => setShowIncludes(!showIncludes)}
                    className="w-full flex justify-between items-center text-xl text-left font-semibold focus:outline-none"
                >
                    Includes
                    {showIncludes ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {showIncludes && (
                    <ul className="mt-4 pl-4 list-disc">
                        {includes?.map((item, index) => (
                            <li key={index} className="py-2 text-gray-700">{item}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Special Guests Section */}
            <div className="bg-gradient-to-r from-blue-300 to-rose-300 py-20">
                <div className="text-center mb-16">
                    <h2 className="font-poppins text-lg mb-4 font-semibold gradText">
                        Here are...
                    </h2>
                    <h2 className="leading-[3.5rem] mb-8 text-5xl font-ubuntu text-blue-950 font-bold">
                        The Event Speakers
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-poppins max-w-7xl mx-auto px-10">
                    {special_guests?.map((guest, index) => (
                        <div key={index} className="bg-gradient-to-r from-gray-100 to-pink-100 rounded-lg shadow-lg p-10 flex flex-col items-center hover:shadow-2xl transition-shadow">
                            <div className="relative group w-36 h-36 rounded-full mb-7 border-[6px] border-custom-blue overflow-hidden">
                                {/* Image and overlay container */}
                                <img
                                src={guest?.picture}
                                alt={guest?.name}
                                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Rose-colored overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-custom-pink to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80 group-hover:scale-110 rounded-full"></div>

                                {/* Social icons */}
                                <div className="absolute inset-0 flex justify-center items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <a href="#" className="text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        <h4 className="text-xl font-bold font-ubuntu">{guest?.name}</h4>
                        <p className="text-sm text-gray-600">{guest?.title}</p>
                        <p className="text-sm text-center mt-6 text-gray-800 leading-[1.25rem]">{guest?.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;