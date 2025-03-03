import React from 'react';
import { useSelector } from 'react-redux';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const theme = darkMode ? "dark" : "light";

    return (
        <footer className={`bg-${theme}-surface text-${theme}-textSecondary p-4`}>
            <div className="container mx-auto text-center">
                {/* Footer Links */}
                <ul className="flex justify-center space-x-6 mb-4">
                    <li>
                        <button
                            onClick={() => console.log('Privacy Policy clicked')}
                            className={`hover:text-${theme}-primary transition-colors underline bg-transparent border-none cursor-pointer`}
                        >
                            Privacy Policy
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => console.log('Terms of Service clicked')}
                            className={`hover:text-${theme}-primary transition-colors underline bg-transparent border-none cursor-pointer`}
                        >
                            Terms of Service
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => console.log('Contact Us clicked')}
                            className={`hover:text-${theme}-primary transition-colors underline bg-transparent border-none cursor-pointer`}
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FaInstagram size={24} className={`text-${theme === 'dark' ? 'pink-500' : 'pink-600'}`} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FaLinkedin size={24} className={`text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`} />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FaGithub size={24} className={`text-${theme}-textSecondary`} />
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Pramod Lohra. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
