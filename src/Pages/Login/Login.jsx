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
            title: 'Google Sign-In Successful',
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
        <div className="bg-indigo-950">
            <div className="flex items-center py-[18rem] justify-center min-h-screen -mt-32"> {/* important to notice the div's classes */}
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
                    <h2 className="text-4xl font-bold mb-16 text-center font-ubuntu text-custom-blue">Login to your account</h2>
                    
                    <hr className="mb-8"/>
                    
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-9 font-poppins">
                            <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-3">Email</label>
                            <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email address"
                            required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-16 font-poppins">
                            <label htmlFor="password" className="block text-xl font-semibold text-gray-700 mb-3">Password</label>
                            <input
                            type="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                            required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white font-semibold text-xl py-3 px-4 rounded-md hover:bg-gray-700 focus:outline-none active:scale-95 transition duration-100"
                        >
                            Login
                        </button>
                    </form>
                    <p className="font-poppins my-5 text-center text-gray-600">or, sign in with...</p>
                    <div className='flex justify-center mt-4 font-poppins gap-3'>
                        <button
                            onClick={handleGoogleSignIn}
                            type="submit"
                            className="btnSubmit w-1/4 flex justify-center py-2 px-3 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-600 hover:text-white active:scale-95"
                            >
                            Google
                        </button>
                        <button
                            onClick={handleGitSignIn}
                            type="submit"
                            className="btnSubmit w-1/4 flex justify-center py-2 px-3 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-600 hover:text-white active:scale-95"
                            >
                            Github
                        </button>
                    </div>

                    <p className="mt-6 text-center text-lg font-poppins">
                        Don’t have an account? <Link to="/register" className="text-red-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
