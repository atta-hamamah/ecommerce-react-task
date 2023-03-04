import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleCheckProductsClick = () => {
    navigate('/products');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .9 }}
      className="flex items-center justify-center align-middle h-screen"
    >
      <div className="flex gap-4 sm:gap-24 justify-center align-middle items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-br from-pink-400 via-red-500 to-yellow-500 flex items-center justify-center rounded-full h-28 sm:h-44 w-28 sm:w-44 text-white mb-8 shadow-md cursor-pointer"
          onClick={handleCheckProductsClick}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-2xl font-bold">
            Products
          </motion.button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-br from-pink-400 via-red-500 to-yellow-500 flex items-center justify-center rounded-full  h-28 sm:h-44 w-28 sm:w-44 text-white mb-8 shadow-md cursor-pointer"
          onClick={handleLoginClick}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-2xl font-bold">
            Log In
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Welcome;
