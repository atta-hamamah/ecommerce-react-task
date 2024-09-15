import { motion } from 'framer-motion';
import { Context } from '../Context';
import React from 'react';

function SignUp() {
  const { formData, setFormData, formErrors, setFormErrors } = React.useContext(Context)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    setFormErrors(errors);

  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-pink-500 to-purple-500">
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, duration: 0.5 }}
        className=""
      >
        <h1 className="text-white text-center text-3xl font-bold mb-5">Create an account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-5 w-96 rounded-lg shadow-lg">
          <label className="text-gray-700 font-medium" htmlFor="name">
            <div className=' grid grid-cols-1'>
              Name
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

          </label>

          {formErrors.email && <p className="text-red-500">{`formErrors.name`}</p>}
          <label className="text-gray-700 font-medium" htmlFor="email">
            <div className='w-full grid grid-cols-1'>
              Email address
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </label>

          {formErrors.email && <p className="text-red-500">{`formErrors.email`}</p>}
          <label className="text-gray-700 font-medium" htmlFor="password">
            <div className=' grid grid-cols-1'>
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </label>
          {formErrors.password && <p className="text-red-500">{`formErrors.password`}</p>}
          <label className="text-gray-700 font-medium" htmlFor="confirmPassword">
            <div className=' grid grid-cols-1'>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </label>
          {formErrors.confirmPassword && <p className="text-red-500">{formErrors.confirmPassword}</p>}
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out">
            Create account
          </button>
        </form>
      </motion.div>
    </div>
  );

}

export default SignUp;
