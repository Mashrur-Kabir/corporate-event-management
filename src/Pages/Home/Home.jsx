import bg from "../../../src/assets/images/bg-img.jpg";
import whyus from "../../../src/assets/images/whyus.png";
import moment from "moment";
import { FaChair } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import Features from "./../Features/Features";
import gold from "../../assets/icons/project_logo/coin.png";
import ruby from "../../assets/icons/project_logo/ruby.png";
import diamond from "../../assets/icons/project_logo/diamond.png";
import {
  com1,
  com2,
  com3,
  com4,
  com5,
  com6,
  com7,
} from "../../AssetExport/Assets";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Home = () => {
  const datas = useLoaderData();

  const currentDate = moment().format("MMMM D, YYYY");

  // Timer Logic
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-20T00:00:00"); // Set the event date
    const difference = eventDate - new Date(); // This gets the current time each time it's called
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  /* AOS */
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="">
      {/* Header */}
      <div className="relative">
        {/* Background Image */}
        <div>
          <img
            className="brightness-[0.40] w-full h-screen object-cover"
            src={bg}
            alt="Background"
          />
        </div>
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-4 md:px-8 scale-90 md:scale-100 lg:scale-110 xl:scale-125">
          <p className="font-poppins text-2xl md:text-3xl text-amber-400">
            {currentDate}
          </p>
          <p className="text-4xl md:text-5xl font-ubuntu font-semibold text-white leading-snug md:leading-[1.2em]">
            World Digital <br /> Conference 2024
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white mb-6">
            <p className="font-poppins text-sm md:text-lg flex items-center">
              {" "}
              <FaChair className="mr-2 md:mr-3 text-amber-400" /> 5000 SEATS
            </p>
            <p className="font-poppins text-sm md:text-lg flex items-center">
              {" "}
              <IoPerson className="mr-2 md:mr-3 text-amber-400" /> 12 SPEAKERS
            </p>
            <p className="font-poppins text-sm md:text-lg flex items-center">
              {" "}
              <FaLocationDot className="mr-2 md:mr-3 text-amber-400" /> MIAMI,
              FLORIDA{" "}
            </p>
          </div>
          <Link to="/login">
            <button className="relative px-6 py-3 md:px-7 md:py-3 rounded-lg bg-amber-400 text-white font-poppins overflow-hidden group">
              <span className="relative z-20 transition-colors duration-300 ease-in-out group-hover:text-amber-600">
                Book Now
              </span>
              <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0 z-10"></span>
              <span className="absolute inset-0 bg-amber-400 transition-transform duration-300 ease-in-out transform group-hover:-translate-x-full z-0"></span>
            </button>
          </Link>
        </div>

        {/* Countdown Timer */}
        <div className="absolute rounded-sm -bottom-12 md:-bottom-[4rem] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-custom-blue to-custom-pink text-white py-5 px-6 md:py-7 md:px-8 shadow-lg max-w-lg md:max-w-4xl w-full mx-auto">
          <div className="flex gap-4 md:gap-6 items-center justify-center font-poppins">
            <div className="text-center">
              <p className="text-4xl md:text-6xl font-bold">
                {timeLeft.days || "0"}
              </p>
              <p className="text-base md:text-lg">Days</p>
            </div>
            <p className="text-4xl md:text-6xl font-semibold">:</p>
            <div className="text-center">
              <p className="text-4xl md:text-6xl font-bold">
                {timeLeft.hours || "0"}
              </p>
              <p className="text-base md:text-lg">Hours</p>
            </div>
            <p className="text-4xl md:text-6xl font-semibold">:</p>
            <div className="text-center">
              <p className="text-4xl md:text-6xl font-bold">
                {timeLeft.minutes || "0"}
              </p>
              <p className="text-base md:text-lg">Minutes</p>
            </div>
            <p className="text-4xl md:text-6xl font-semibold">:</p>
            <div className="text-center">
              <p className="text-4xl md:text-6xl font-bold">
                {timeLeft.seconds || "0"}
              </p>
              <p className="text-base md:text-lg">Seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="max-w-7xl mx-auto my-44 md:my-60 px-4 md:px-8 flex items-center justify-between">
        <div>
          <h2 className="font-poppins text-lg mb-4 font-semibold gradText">
            Join Our Endeavors
          </h2>
          <h2 className="leading-[3.5rem] mb-8 text-5xl font-ubuntu text-blue-950 font-bold">
            Why Choose <br /> Corporex?
          </h2>
          <p className="font-poppins text-gray-600 leading-[1.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmtempor incididunt labore et dolore magna aliqu enim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
        </div>
        <div>
          <img src={whyus} alt="" />
        </div>
      </div>
      {/* Our services */}
      <div className="bg-gradient-to-r mb-44 from-gray-200 to-slate-300">
        <div className="max-w-7xl mx-auto md:mb-60 px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-28">
          <div>
            <h2 className="font-poppins text-lg mb-4 font-semibold gradText">
              Featuring
            </h2>
            <h2 className="leading-[3.5rem] mb-8 text-5xl font-ubuntu text-blue-950 font-bold">
              Our Services
            </h2>
          </div>
          {datas.map((data, idx) => (
            <Features key={idx} data={data}></Features>
          ))}
        </div>
      </div>

      {/* our package */}
      <div className="mb-44 bg-gradient-to-r from-sky-200 to-pink-200 py-20">
        {/* title */}
        <div className="text-center mb-20">
          <h2 className="font-poppins text-lg mb-4 font-semibold gradText">
            Our Package
          </h2>
          <h2 className="leading-[3.5rem] text-5xl font-ubuntu text-blue-950 font-bold">
            Choose A Package
          </h2>
        </div>

        {/* cards */}
        <div className="max-w-7xl mx-auto font-poppins md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
          {/* card 1 */}
          <div className="flex justify-center items-center" data-aos="fade-up">
            <div className="bg-white rounded-sm shadow-2xl w-80 text-center pt-16 pb-8 px-10 border-amber-500 border-b-[1.25rem] border-t-[9rem] relative transition-shadow duration-300 hover:shadow-none">
              {/* Icon/Image */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 border-[0.85rem] border-white rounded-full z-0 parent-div-1">
                <div className="bg-white rounded-full border-[0.35rem] w-32 h-32 border-amber-500 mx-auto flex items-center justify-center mb-4 p-5">
                  <img className="w-16 fancy-animation" src={gold} alt="" />
                </div>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-semibold mb-4 relative z-10">
                Gold Pass
              </h2>

              {/* Price */}
              <p className="text-3xl font-bold text-amber-500 mb-10 font-ubuntu">
                $35.99
              </p>

              {/* Button */}
              <Link
                to="/hire"
                className="bg-amber-500 border-2 border-amber-500 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-amber-600"
              >
                Details
              </Link>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex justify-center items-center" data-aos="fade-up">
            <div className="bg-white rounded-sm shadow-2xl w-80 text-center pt-16 pb-8 px-10 border-sky-500 border-b-[1.25rem] border-t-[9rem] relative transition-shadow duration-300 hover:shadow-none">
              {/* Icon/Image */}
              <div className="parent-div absolute -top-20 left-1/2 transform -translate-x-1/2 border-[0.85rem] border-white rounded-full z-0">
                <div className="bg-white rounded-full border-[0.35rem] w-32 h-32 border-sky-500 mx-auto flex items-center justify-center mb-4 p-5">
                  <img className="w-16" src={diamond} alt="" />
                </div>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-semibold mb-4 relative z-10">
                Diamond Pass
              </h2>

              {/* Price */}
              <p className="text-3xl font-bold text-sky-500 mb-10 font-ubuntu">
                $99.99
              </p>

              {/* Button */}
              <Link
                to="/hire"
                className="bg-sky-500 border-2 border-sky-500 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-sky-600"
              >
                Details
              </Link>
            </div>
          </div>

          {/* card 3 */}
          <div className="flex justify-center items-center" data-aos="fade-up">
            <div className="bg-white rounded-sm shadow-2xl w-80 text-center pt-16 pb-8 px-10 border-rose-500 border-b-[1.25rem] border-t-[9rem] relative transition-shadow duration-300 hover:shadow-none">
              {/* Icon/Image */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 border-[0.85rem] border-white rounded-full z-0 parent-div-3">
                <div className="bg-white rounded-full border-[0.35rem] w-32 h-32 border-rose-500 mx-auto flex items-center justify-center mb-4 p-5">
                  <img className="w-16 slide-in-animation" src={ruby} alt="" />
                </div>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-semibold mb-4 relative z-10">
                Ruby Pass
              </h2>

              {/* Price */}
              <p className="text-3xl font-bold text-rose-500 mb-10 font-ubuntu">
                $59.99
              </p>

              {/* Button */}
              <Link
                to="/hire"
                className="bg-rose-500 border-2 border-rose-500 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-rose-600"
              >
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <div className="bg-gradient-to-r from-slate-300 to-gray-100 mb-44 py-28">
          <div className="text-center mb-20">
            <h2 className="font-poppins text-lg mb-4 font-semibold gradText">
              Collaborative
            </h2>
            <h2 className="leading-[3.5rem] mb-8 text-5xl font-ubuntu text-blue-950 font-bold">
              Our Partnerships
            </h2>
          </div>
          <div className="grid md:px-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com1}
              alt=""
            />
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com2}
              alt=""
            />
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com3}
              alt=""
            />
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com4}
              alt=""
            />
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com5}
              alt=""
            />
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com6}
              alt=""
            />
            <img
              className="w-64 shadow-xl transition-shadow duration-300 hover:shadow-none"
              src={com7}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
