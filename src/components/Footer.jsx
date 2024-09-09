import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-col md:flex-row">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">BookStore</h2>
            <p className="mt-2 text-gray-400">Your one-stop shop for books.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
