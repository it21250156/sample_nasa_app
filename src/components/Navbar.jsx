import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../assets/rocket.png';

const Navbar = () => {
  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  return (
    <div className="font-mono">
      <div className="flex items-center justify-between mb-3">
        <img src={logo} alt="Logo" className="h-24 w-auto m-5" />
        <ul className="flex justify-center">
          <li>
            <motion.div
              className={`p-4 m-4 nav-box ${
                location.pathname === '/' ? 'nav-selected' : ''
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            >
              <Link to="/">
                <p className="text-xl font-semibold text-gradient-1">Home</p>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              className={`p-4 m-4 nav-box ${
                location.pathname === '/apod' ? 'nav-selected' : ''
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            >
              <Link to="/apod">
                <p className="text-xl font-semibold text-gradient-1">APOD</p>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              className={`p-4 m-4 nav-box ${
                location.pathname === '/mars' ? 'nav-selected' : ''
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            >
              <Link to="/mars">
                <p className="text-xl font-semibold text-gradient-1">Mars</p>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              className={`p-4 m-4 nav-box ${
                location.pathname === '/earth' ? 'nav-selected' : ''
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            >
              <Link to="/earth">
                <p className="text-xl font-semibold text-gradient-1">Earth</p>
              </Link>
            </motion.div>
          </li>
        </ul>
      </div>
      <hr className="line-gradient mb-5" />
    </div>
  );
};

export default Navbar;
