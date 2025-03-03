import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaInstagram, FaLinkedin, FaGithub, FaSun, FaMoon, FaTwitter } from 'react-icons/fa';
import { toggleTheme } from '../utils/themeSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const theme = darkMode ? 'dark' : 'light';
    const dispatch = useDispatch();

    return (
        <div className={`flex justify-between bg-${theme}-surface text-${theme}-textPrimary px-4 shadow-md sticky top-0`}>
            {/* Navigation Links */}
            <div>
                <ul className="flex p-2 m-2 space-x-6">
                    <Link to='/'><li className={`hover:text-${theme}-primary transition-colors`}>Home</li></Link>
                    <Link to="/about"><li className={`hover:text-${theme}-primary transition-colors`}>About</li></Link>
                    <Link to="/contact"><li className={`hover:text-${theme}-primary transition-colors`}>Contact</li></Link>
                    <Link to="/project"><li className={`hover:text-${theme}-primary transition-colors`}>Projects</li></Link>

                </ul>
            </div>

            {/* Brand Name */}
            <div>
                <h1 className="p-2 m-2 font-bold text-3xl">Pramod</h1>
            </div>

            {/* Social Icons & Theme Toggle */}
            <div className="flex items-center space-x-8 p-2">
                {/* Social Icons */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaInstagram size={24} className="text-pink-500" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaLinkedin size={24} className="text-blue-500" />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaGithub size={24} className={`text-${theme}-textSecondary`} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaTwitter size={24} className={`text-${darkMode ? 'sky-400' : 'blue-500'}`} />
                </a>

                {/* Theme Toggle Icon */}
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="hover:scale-110 transition-transform"
                >
                    {darkMode ? (
                        <FaSun size={24} className="text-yellow-400" />
                    ) : (
                        <FaMoon size={24} className="text-blue-500" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Header;
