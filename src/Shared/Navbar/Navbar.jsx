import { Link } from "react-router-dom";
import logo from '../../../src/assets/icons/project_logo/paste-pink.png';
import './Navbar.css';

const Navbar = () => {
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
                    <Link className="custom-underline" to="/speakers">Speakers</Link>
                    <Link className="custom-underline" to="/login">Login</Link>
                    <Link className="custom-underline" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
