import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="bg-gradient-to-br rounded-3xl from-pink-800 to-purple-800 fixed bottom-0 w-full"
    >
      <div className="flex flex-col items-center text-white mb-1">
        <div className="text-xl font-bold tracking-widest mb-1">TECHNOMASR</div>
        <div className="text-center text-gray-200 text-sm">
          &copy; {currentYear} TECHNOMASR. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
export default Footer;