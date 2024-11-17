'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

import Link from 'next/link';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Stay Ahead, Stay Safe
        </h4>
        <div className='flex justify-center'>
      <Link href="/result">
        <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-12 py-6 rounded-full text-white font-semibold text-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:opacity-90'>
                      FORECAST
        </button>
          </Link>
    </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4 ">
        <Link href='/result'>
        <button className="font-extrabold text-[24px] uppercase bg-gradient-to-r from-pink-200 via-blue-600 to-red-400 bg-clip-text text-transparent">
              Cloud Burst Prediction
          </button> 
          </Link>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 Cloud Burst Prediction. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
