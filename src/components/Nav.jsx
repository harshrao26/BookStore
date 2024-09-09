import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FiHome, FiBook, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc- shadow-md">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-900 hover:text-white hover:bg-zinc-700 transition-all ease-in-out  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-text-zinc-900  text-2xl font-bold">BookStore</h1>
            </div>
            <div className="hidden w-full sm:block sm:ml-6">
              <div className="flex justify-end gap-4 ">
                <Link
                  to="/"
                  className="text-zinc-900 flex gap-2 items-center hover:bg-zinc-700 transition-all ease-in-out  hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <FiHome size={20} />Home 
                </Link>
                <Link
                  to="/books"
                  className="text-zinc-900 flex gap-2 items-center hover:bg-zinc-700 transition-all ease-in-out  hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                   <FiBook size={20} />Books
                </Link>
                <Link
                  to="/cart"
                  className="text-zinc-900 flex gap-2 items-center hover:bg-zinc-700 transition-all ease-in-out  hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                   <FiShoppingCart size={20} />Cart
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-zinc-900 flex gap-2 items-center hover:bg-zinc-700 transition-all ease-in-out  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <FiHome size={20} />Home
            </Link>
            <Link
              to="/books"
              className="text-zinc-900 flex gap-2 items-center hover:bg-zinc-700 transition-all ease-in-out  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <FiBook size={20} /> Books
            </Link>
            <Link
              to="/cart"
              className="text-zinc-900  flex gap-2 items-center hover:bg-zinc-700 transition-all ease-in-out  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
               <FiShoppingCart size={20} />Cart
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
