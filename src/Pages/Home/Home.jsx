import bg from "../../../src/assets/images/bg-img.jpg";
import whyus from "../../../src/assets/images/whyus.png";
import moment from "moment";
import { FaChair } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import Features from './../Features/Features';
import check from '../../assets/icons/project_logo/check.png'
import cross from '../../assets/icons/project_logo/cross.png'

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

  return (
    <div>
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-4 md:px-8">
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
          <Link to="/booknow">
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
      <div className="max-w-7xl mx-auto mb-44 md:mb-60 px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
                <h2 className="font-poppins text-lg mb-4 font-semibold gradText">
                    Featuring
                </h2>
                <h2 className="leading-[3.5rem] mb-8 text-5xl font-ubuntu text-blue-950 font-bold">
                    Our Services
                </h2>
            </div>
            {
                datas.map(data => <Features key={datas.id} data={data}></Features>)
            }
      </div>

      {/* our package */}
        <div className="font-poppins max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* card 1 */}
            <div className="max-w-sm rounded-lg shadow-lg p-6 bg-white border hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="your-image-here.png" alt="Icon" className="w-12 h-12" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Full Pass</h2>
                <p className="text-center text-3xl text-gray-800 font-bold mb-4">$99.99</p>

                <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                    <img className="w-8" src={check} alt="" />
                    <span className="text-gray-600">Conference Tickets</span>
                    </li>

                    <li className="flex items-center gap-2">
                    <img className="w-8" src={check} alt="" />
                    <span className="text-gray-600">Free Lunch and Coffee</span>
                    </li>

                    <li className="flex items-center gap-2">
                    <img className="w-8" src={check} alt="" />
                    <span className="text-gray-600">Certificate</span>
                    </li>

                    <li className="flex items-center gap-2">
                    <img className="w-8" src={cross} alt="" />
                    <span className="text-gray-600">Easy Access</span>
                    </li>

                    <li className="flex items-center gap-2">
                    <img className="w-8" src={cross} alt="" />
                    <span className="text-gray-600">Free Contacts</span>
                    </li>
                </ul>

                <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    BUY Ticket
                    </button>
                </div>
            </div>


        </div>
    </div>
  );
};

export default Home;
