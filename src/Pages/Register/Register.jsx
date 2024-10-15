import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import ClipLoader from "react-spinners/ClipLoader"; // React Spinners loader

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false); // Loader state for post-registration
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // Password validation
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isValidLength = password.length >= 6;

        if (!isValidLength) {
            Swal.fire({
                icon: 'error',
                title: 'Password Too Short',
                text: 'Password must be at least 6 characters long.',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        } else if (!hasUpperCase) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Capital Letter',
                text: 'Password must contain at least one uppercase letter.',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        } else if (!hasSpecialChar) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Special Character',
                text: 'Password must contain at least one special character.',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        } else {
            // Register/create user if the password is valid
            createUser(email, password)
            .then(res => {
                console.log("User registered successfully:", res);

                // Show SweetAlert for successful registration
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You can now log in with your credentials.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#4CAF50',
                }).then(() => {
                    setIsLoading(true); // Set the loader to true after clicking OK
                    setTimeout(() => {
                        navigate('/login');
                    }, 1500); // Delay for 1.5 seconds to show the loader
                });
            })
            .catch(err => {
                console.error("Error registering user:", err.message, err.code);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: err.message || 'Please try again.',
                    confirmButtonText: 'Retry',
                    confirmButtonColor: '#d33',
                });
            });
        // Clear input fields
        e.currentTarget.reset();
        }
    };

    return (
        <div className="bg-indigo-950">
            {isLoading ? (
                // Show loader during navigation
                <div className="flex items-center justify-center min-h-screen">
                    <ClipLoader color="#4CAF50" size={60} />
                </div>
            ) : (
                <div className="flex items-center justify-center py-20 md:py-[18rem] min-h-screen -mt-16 md:-mt-32">
                    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-16 text-center font-ubuntu text-custom-blue">
                        Register Here
                        </h2>
                        
                        <hr className="mb-6 md:mb-8" />

                        <form onSubmit={handleRegister}>
                        {/* Email Input */}
                        <div className="mb-6 md:mb-9 font-poppins">
                            <label htmlFor="email" className="block text-lg sm:text-xl font-semibold text-gray-700 mb-2 md:mb-3">Email</label>
                            <input
                            type="email"
                            name="email"
                            className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Provide your email address"
                            required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-12 md:mb-16 font-poppins">
                            <label htmlFor="password" className="block text-lg sm:text-xl font-semibold text-gray-700 mb-2 md:mb-3">Password</label>
                            <input
                            type="password"
                            name="password"
                            className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Set a password"
                            required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white font-semibold text-lg sm:text-xl py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-gray-700 focus:outline-none active:scale-95 transition duration-100"
                        >
                            Register
                        </button>
                        </form>

                        <p className="mt-6 text-center text-sm md:text-lg font-poppins">
                        Already a member? <Link to="/login" className="text-red-500 hover:underline">Login</Link>
                        </p>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Register;
