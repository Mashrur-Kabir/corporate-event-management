import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';


const Login = () => {

    const { logIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    /* success swal */
    const handleSuccessSwal = () => {
        // SweetAlert for successful login
        Swal.fire({
            icon:'success',
            title: 'Sign-In Successful',
            text: 'Welcome back! You are now logged in.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#4CAF50',
        });
        // Navigate after successful login
        navigate(location?.state ? location.state : '/');
    }

    /* failed swal */
    const handleFailedSwal = (errorMessage) => {
        // SweetAlert for failed login
        Swal.fire({
            icon: 'error',
            title: 'Sign-In Failed',
            text: errorMessage,
            confirmButtonText: 'OK',
            confirmButtonColor: '#F44336',
        });
    }

    /* email-password login */
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        //login
        logIn(email, password)
        .then((res) => {
            console.log('Logged in successfully', res.user);
            handleSuccessSwal();
        })
        .catch((error) => {
            console.error("Error during login:", error);

            let errorMessage = "An error occurred during login.";

            // Handling specific Firebase error codes
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No user found. Please make sure to register';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password. Please try again.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'Too many failed login attempts. Try again later.';
                    break;
                default:
                    errorMessage = 'Login failed. Please check your credentials.';
            }
            handleFailedSwal(errorMessage);
        });
        // Clear input fields
        e.currentTarget.reset();
    }

    /* google login */
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(res =>{
            console.log("Login successful!");
            console.log(res.user);
            handleSuccessSwal();
        })
        .catch(err => {
            let errorMessage = "An error occurred during login.";

            console.error("Error occurred: " + err.message);
            handleFailedSwal(errorMessage);
        })
    }

    /* Github login */
    const handleGitSignIn = () => {
        signInWithGithub()
        .then(res =>{
            console.log("Login successful!");
            console.log(res.user);
            handleSuccessSwal();
        })
        .catch(err => {
            let errorMessage = "An error occurred during login.";

            console.error("Error occurred: " + err.message);
            handleFailedSwal(errorMessage);
        })
    }

    return (
        <div className="bg-indigo-950 min-h-screen flex items-center justify-center">
            <div className="flex items-center justify-center py-20 md:py-32 lg:py-40 w-full">
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-12 text-center font-ubuntu text-custom-blue">
                    Login
                </h2>

                <hr className="mb-6 md:mb-8" />

                <form onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="mb-6 md:mb-9 font-poppins">
                    <label htmlFor="email" className="block text-lg sm:text-xl font-semibold text-gray-700 mb-2 md:mb-3">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your email address"
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
                        placeholder="Enter your password"
                        required
                    />
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="w-full bg-gray-800 text-white font-semibold text-lg sm:text-xl py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-gray-700 focus:outline-none active:scale-95 transition duration-100"
                    >
                    Login
                    </button>
                </form>

                <p className="font-poppins my-5 text-center text-sm md:text-base text-gray-600">or, sign in with...</p>

                {/* Social Login Buttons */}
                <div className='flex justify-center mt-4 font-poppins gap-3'>
                    <button
                    onClick={handleGoogleSignIn}
                    type="submit"
                    className="w-1/4 flex justify-center py-2 px-3 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-600 hover:text-white active:scale-95"
                    >
                    Google
                    </button>
                    <button
                    onClick={handleGitSignIn}
                    type="submit"
                    className="w-1/4 flex justify-center py-2 px-3 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-600 hover:text-white active:scale-95"
                    >
                    Github
                    </button>
                </div>

                <p className="mt-6 text-center text-sm md:text-lg font-poppins">
                    Don’t have an account? <Link to="/register" className="text-red-500 hover:underline">Register</Link>
                </p>
                </div>
            </div>
        </div>

    );
};

export default Login;
