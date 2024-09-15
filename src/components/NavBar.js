import React from 'react';
import logo from '../pics/logo.jpg'
import { BiUserCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Navbar() {
  const [showUser, setShowUser] = React.useState(false)
  const { email, setEmail } = React.useContext(Context)
  function userShowing() {
    setShowUser(prev => !prev)
  }

  return (
    <nav className="bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg sticky top-0  rounded-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          {/* Logo */}
          <Link className=' absolute z-10 ' to={`/`}>
            <motion.div
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >

              <img
                className="h-8 mt-0 w-auto rounded-md"
                src={logo}
                alt="Logo"
              />

              <span className=" hidden sm:block font-bold text-xl ml-2 text-white">
                T-M
              </span>
            </motion.div>
          </Link>
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
            <BiUserCircle onClick={userShowing} className=' transition-all duration-200 cursor-pointer text-3xl right-1 absolute hover:text-cyan-500 text-white' />
            {showUser &&
              <Link to={`login`}>
                <div onClick={() => setEmail('')} className='transition-all duration-300 -mt-4 font-bold first-letter: text-white flex justify-center items-center text-center border-2 hover:text-cyan-500 hover:border-white border-cyan-500 border-solid bg-purple-400 p-1 rounded-full absolute right-8'>
                  {email ? 'Log out' : 'Log in'}
                </div>
              </Link>
            }
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
