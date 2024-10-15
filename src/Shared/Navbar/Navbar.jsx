import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from '../../../src/assets/icons/project_logo/paste-pink.png';
import './Navbar.css';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import dropdown from '../../assets/icons/project_logo/dropdown.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation(); // Get the current path

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully!");
                Swal.fire({
                    title: 'Logged Out!',
                    text: 'You have been successfully logged out.',
                    icon: 'info',
                    background: '#f0f0f0',
                    color: '#333',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#ff6b6b',
                    iconColor: '#007BFF',
                });
            })
            .catch((err) => {
                console.error("Error logging out:", err);
                Swal.fire({
                    title: 'Error!',
                    text: `Error logging out: ${err.message}`,
                    icon: 'error',
                    background: '#ffe6e6',
                    color: '#ff3333',
                    confirmButtonText: 'Retry',
                    confirmButtonColor: '#d33',
                });
            });
    };

    // Close dropdown on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isActive = (path) => location.pathname === path; // Check if the path is active

    return (
        <div className="bg-indigo-950 relative">
            <div className="p-5 text-white flex items-center justify-between w700:bg-none max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Corporex Logo" className="w-11 h-11" />
                    <h2 className="font-ubuntu font-semibold text-3xl">Corporex</h2>
                </div>

                {/* Hamburger Menu Icon for Smaller Screens */}
                <div className="w700:hidden">
                    <button onClick={toggleMenu} className="text-3xl focus:outline-none flex items-center active:scale-90 transition duration-200">
                        <img className="w-9" src={dropdown} alt="" />
                    </button>
                </div>

                {/* Links Section for Large Screens */}
                <div className="hidden w700:flex font-poppins font-medium items-center space-x-7">
                    <Link to="/" className={`custom-underline ${isActive('/') ? 'active-underline' : ''}`}>Home</Link>
                    <Link to="/about" className={`custom-underline ${isActive('/about') ? 'active-underline' : ''}`}>About</Link>
                    <Link to="/blogs" className={`custom-underline ${isActive('/blogs') ? 'active-underline' : ''}`}>Blog</Link>
                    {user ? 
                        <button onClick={handleLogOut} className="custom-underline">Logout</button> : 
                        <Link to="/login" className={`custom-underline ${isActive('/login') ? 'active-underline' : ''}`}>Login</Link>
                    }
                    <Link to="/hire" className={`custom-underline ${isActive('/hire') ? 'active-underline' : ''}`}>Hire Us</Link>
                </div>
            </div>

            {/* Compact Dropdown Menu for Smaller Screens */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-1 bg-indigo-950 rounded-md shadow-lg p-3 w-40 z-30">
                    <div className="font-poppins font-medium flex flex-col items-end space-y-3 text-white">
                        <Link to="/" className={`custom-underline ${isActive('/') ? 'active-underline' : ''}`} onClick={toggleMenu}>Home</Link>
                        <Link to="/about" className={`custom-underline ${isActive('/about') ? 'active-underline' : ''}`} onClick={toggleMenu}>About</Link>
                        <Link to="/blogs" className={`custom-underline ${isActive('/blogs') ? 'active-underline' : ''}`} onClick={toggleMenu}>Blog</Link>
                        {user ? 
                            <button 
                                onClick={() => { handleLogOut(); toggleMenu(); }} 
                                className="custom-underline"
                            >
                                Logout
                            </button> : 
                            <Link to="/login" className={`custom-underline ${isActive('/login') ? 'active-underline' : ''}`} onClick={toggleMenu}>Login</Link>
                        }
                        <Link to="/hire" className={`custom-underline ${isActive('/hire') ? 'active-underline' : ''}`} onClick={toggleMenu}>Hire Us</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
