import { Link, NavLink } from "react-router-dom";
import logo from '../../../src/assets/icons/project_logo/paste-pink.png';
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("Logged out successfully!");

            // SweetAlert for successful logout
            Swal.fire({
                title: 'Logged Out!',
                text: 'You have been successfully logged out.',
                icon: 'info',
                background: '#f0f0f0', // Different background color
                color: '#333', // Text color
                confirmButtonText: 'OK',
                confirmButtonColor: '#ff6b6b', // Custom button color (light red)
                iconColor: '#007BFF', // Custom icon color (blue)
            });
        })
        .catch((err) => {
            console.error("Error logging out:", err);

            // SweetAlert for logout error
            Swal.fire({
                title: 'Error!',
                text: `Error logging out: ${err.message}`,
                icon: 'error',
                background: '#ffe6e6', // Light red background for error
                color: '#ff3333', // Red text for error message
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        });
    }

    return (
        <div className="bg-indigo-950">
            <div className="p-5 text-white flex items-center justify-between w700:bg-none max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Corporex Logo" className="w-11 h-11" />
                    <h2 className="font-ubuntu font-semibold text-3xl">Corporex</h2>
                </div>
                <div className="font-poppins font-medium flex items-center space-x-7">
                    <Link className="custom-underline" to="/">Home</Link>
                    <Link className="custom-underline" to="/about">About</Link>
                    <Link className="custom-underline" to="/blog">Blog</Link>
                    {
                        user ? 
                            <button onClick={handleLogOut} className="custom-underline">
                                Logout
                            </button> 
                        : 
                        <NavLink to="/login" className="custom-underline">
                            Login
                        </NavLink>
                    }
                    <Link className="custom-underline" to="/hire">Hire Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
