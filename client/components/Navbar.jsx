'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  
  // State for mobile menu toggle
  const [toggle, setToggle] = useState(false);

  // State for active link
  const [active, setActive] = useState('Home');

  // Function to handle link click
  const handleLinkClick = (link) => {
    debugger;
    setActive(link);
    setToggle(false); // Close mobile menu after link click
  };
  
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      
      {/* Nav Gradient */}
      <div className="absolute w-[50%] inset-0 gradient-01 z-[-2]" />
      {/* Nav Gradient */}

      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 z-[2]`}
      >
        {/* Search Img */}
        <img
          src="/thunder-cloud.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        {/* Nav Heading */}
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          <a href="#home" onClick={() => handleLinkClick('Home')}>
            CLOUDY
          </a>          
        </h2>
        {/* Menu Img */}
        <img
          src={toggle ? '/close.svg' : '/menu.svg'}
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Menu View */}
      <div className={`${!toggle ? 'hidden' : 'flex justify-center items-center'} z-[1]`}>
        <ul className="list-none flex justify-end items-center flex-1 flex-col mt-6">
          {['About', 'Explore', 'Product', 'Insights'].map((link) => (
            <li 
              key={link.toLowerCase()}
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 mt-2 ${
                active === link ? 'text-white' : 'text-dimWhite'
              }`}
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => handleLinkClick(link)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Menu View */}

    </motion.nav>
  );
};

export default Navbar;