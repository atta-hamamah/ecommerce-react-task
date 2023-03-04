import React from 'react';
import logo from '../pics/logo.jpg'
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg sticky top-0  rounded-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              className="h-8 w-auto rounded-md"
              src={logo}
              alt="Logo"
            />
            <span className=" hidden sm:block font-bold text-xl ml-2 text-white">
              T-M
            </span>
          </motion.div>
          {/* Title */}
          <motion.div
            className="absolute inset-y-0 left-0 flex items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-bold text-xl text-white">TECHNOMASR</span>
          </motion.div>
          {/* Cart */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* <BsCartCheck className=' text-white'/> */}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
