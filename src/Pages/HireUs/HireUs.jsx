import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import check from '../../assets/icons/project_logo/check.png';
import cross from '../../assets/icons/project_logo/cross.png';
import gold from '../../assets/icons/project_logo/coin.png';
import ruby from '../../assets/icons/project_logo/ruby.png';
import diamond from '../../assets/icons/project_logo/diamond.png';
import '../Home/Home.css';
import './HireUs.css';
import { FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import MembershipGrowthChart from './chart';
import AOS from 'aos';
import 'aos/dist/aos.css';

Modal.setAppElement('#root'); // To avoid accessibility warnings

const HireUs = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const onSubmit = (data) => {
        closeModal();
        Swal.fire({
            title: 'Success!',
            text: 'Your purchase was successful.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/'); // Redirect to home
        });
        // data is available if needed, for now it's unused
        console.log(data); // Optionally log it for debugging
    };

    /* AOS */
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize with 1-second animation duration
    }, []);

    return (
        <div>
            {/* cards */}
            <div className="pb-20 bg-gradient-to-r from-sky-200 to-pink-200" data-aos="fade-up">
                <h2 className="cursor-pointer text-4xl pt-24 pb-14 text-center font-ubuntu text-blue-950 font-bold hover:underline" data-aos="zoom-in">
                    Choose A Package
                </h2>
                <div className="max-w-7xl mx-auto font-poppins md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
                    {/* card 1 */}
                    <div className="flex justify-center items-center" data-aos="fade-up-right">
                        <div className="bg-white rounded-sm shadow-2xl w-80 text-center pt-16 pb-8 px-10 border-amber-500 border-b-[1.25rem] border-t-[9rem] relative transition-shadow duration-300 hover:shadow-none">
                            {/* Icon/Image */}
                            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 border-[0.85rem] border-white rounded-full z-0 parent-div-1">
                                <div className="bg-white rounded-full border-[0.35rem] w-32 h-32 border-amber-500 mx-auto flex items-center justify-center mb-4 p-5">
                                <img className="w-16 fancy-animation" src={gold} alt="" />
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h2 className="mt-8 text-2xl font-semibold mb-4 relative z-10">Gold Pass</h2>

                            {/* Price */}
                            <p className="text-3xl font-bold text-amber-500 mb-6 font-ubuntu">$35.99</p>

                            {/* Features List */}
                            <ul className="text-left mb-6">
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Conference Tickets
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Free Lunch And Coffee
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-red-600 mr-3" src={cross} alt="" /> Certificate
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-red-600 mr-3" src={cross} alt="" /> Easy Access
                                </li>
                                <li className="flex items-center mb-2 py-2 font-medium text-gray-400">
                                    <img className="w-4 h-4 rounded-full border-2 border-red-600 mr-3" src={cross} alt="" /> Free Contacts
                                </li>
                            </ul>

                            {/* Button */}
                            <button onClick={openModal} className="bg-amber-500 border-2 border-amber-500 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-amber-600">
                                Purchase
                            </button>
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
                            <h2 className="mt-8 text-2xl font-semibold mb-4 relative z-10">Diamond Pass</h2>

                            {/* Price */}
                            <p className="text-3xl font-bold text-sky-500 mb-6 font-ubuntu">$99.99</p>

                            {/* Features List */}
                            <ul className="text-left mb-6">
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Conference Tickets
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Free Lunch And Coffee
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Certificate
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Easy Access
                                </li>
                                <li className="flex items-center mb-2 py-2 font-medium text-gray-400">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Free Contacts
                                </li>
                            </ul>

                            {/* Button */}
                            <button onClick={openModal} className="bg-sky-500 border-2 border-sky-500 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-sky-600">
                                Purchase
                            </button>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="flex justify-center items-center" data-aos="fade-up-left">
                        <div className="bg-white rounded-sm shadow-2xl w-80 text-center pt-16 pb-8 px-10 border-rose-500 border-b-[1.25rem] border-t-[9rem] relative transition-shadow duration-300 hover:shadow-none">
                            {/* Icon/Image */}
                            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 border-[0.85rem] border-white rounded-full z-0 parent-div-3">
                                <div className="bg-white rounded-full border-[0.35rem] w-32 h-32 border-rose-500 mx-auto flex items-center justify-center mb-4 p-5">
                                <img className="w-16 slide-in-animation" src={ruby} alt="" />
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h2 className="mt-8 text-2xl font-semibold mb-4 relative z-10">Ruby Pass</h2>

                            {/* Price */}
                            <p className="text-3xl font-bold text-rose-500 mb-6 font-ubuntu">$59.99</p>

                            {/* Features List */}
                            <ul className="text-left mb-6">
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Conference Tickets
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Free Lunch And Coffee
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-green-600 mr-3" src={check} alt="" /> Certificate
                                </li>
                                <li className="flex items-center mb-2 border-b-2 font-medium text-gray-400 border-gray-300 border-dashed py-2">
                                    <img className="w-4 h-4 rounded-full border-2 border-red-600 mr-3" src={cross} alt="" /> Easy Access
                                </li>
                                <li className="flex items-center mb-2 py-2 font-medium text-gray-400">
                                    <img className="w-4 h-4 rounded-full border-2 border-red-600 mr-3" src={cross} alt="" /> Free Contacts
                                </li>
                            </ul>
                            
                            {/* Button */}
                            <button onClick={openModal} className="bg-rose-500 border-2 border-rose-500 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 ease-in-out hover:bg-white hover:text-rose-600">
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Purchase Modal"
                className="modal-content w-full max-w-lg sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto my-4 p-4 sm:p-6 bg-white rounded-lg shadow-lg"
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 sm:p-4"
                >
                <div className="flex justify-between items-center mb-4 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-ubuntu text-blue-950 cursor-pointer custom-underline">
                    Payment Information
                    </h2>
                    {/* Cancel button to close the modal */}
                    <button
                    onClick={() => {
                        closeModal();
                        reset(); // Reset the form when modal is closed
                    }}
                    className="text-custom-pink text-xl sm:text-2xl border-2 rounded-full hover:border-custom-pink transition duration-200"
                    >
                    <IoCloseSharp />
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="font-poppins">
                    <div className="mb-4 sm:mb-6">
                    <label className="block text-gray-700 font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                        Credit Card Number
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3">
                        <FaCreditCard className="mr-2 text-gray-600 hover:text-blue-600 transition duration-200" />
                        <input
                        className="w-full outline-none text-sm sm:text-base"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        {...register('cardNumber', { required: true })}
                        />
                    </div>
                    </div>
                    <div className="mb-4 sm:mb-6">
                    <label className="block text-gray-700 font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                        Expiration Date
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3">
                        <FaCalendarAlt className="mr-2 text-gray-600 hover:text-amber-600 transition duration-200" />
                        <input
                        className="w-full outline-none text-sm sm:text-base"
                        type="text"
                        placeholder="MM/YY"
                        {...register('expirationDate', { required: true })}
                        />
                    </div>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                        CVV
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3">
                        <FaLock className="mr-2 text-gray-600 hover:text-red-600 transition duration-200" />
                        <input
                        className="w-full outline-none text-sm sm:text-base"
                        type="text"
                        placeholder="123"
                        {...register('cvv', { required: true })}
                        />
                    </div>
                    </div>
                    <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => {
                        closeModal();
                        reset(); // Reset the form when "Cancel" is clicked
                        }}
                        className="bg-red-400 text-white py-2 px-4 sm:px-5 rounded-md font-medium hover:bg-red-600 active:scale-95 transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 sm:px-5 rounded-md font-medium hover:bg-green-600 active:scale-95 transition duration-200"
                    >
                        Confirm
                    </button>
                    </div>
                </form>
            </Modal>


            {/* Statistics chart section */}
            <div 
                className="my-20 py-20 cursor-pointer bg-gradient-to-r from-rose-100 to-amber-100"
                data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-10 font-ubuntu text-blue-950 text-center hover:underline 
                    sm:text-2xl md:text-3xl lg:text-4xl"
                >
                    Membership Growth Statistics
                </h2>
                <div className="flex justify-center max-w-7xl mx-auto px-4 md:px-8">
                    <MembershipGrowthChart />
                </div>
            </div>


        </div>
    );
};

export default HireUs;





