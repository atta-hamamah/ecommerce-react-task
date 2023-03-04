import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

const Login = () => {
const {email, setEmail, password, setPassword} = React.useContext(Context)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if we have a back-end server ready we wold use something like:
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email, password })
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error('Network response was not ok.');
    //   })
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
    
    // Navigate to home page on successful login
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-400 via-red-500 to-yellow-500">
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-110"
            >
              Log in
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-700">New user?</span>
            <Link to={`/signup`}>
              <div
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Sign up
              </div>
            </Link>
            
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
