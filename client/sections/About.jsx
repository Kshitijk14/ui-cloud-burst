'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Cloudy" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to{' '}
        <span className="font-extrabold text-white">Cloudy</span>
        , where cutting-edge technology intersects with environmental responsibility to redefine{' '} 
        <span className="font-extrabold text-white">cloudburst</span> 
        {' '}preparedness. Our model integrates atmospheric conditions and historical weather patterns for a dynamic,{' '} 
        <span className="font-extrabold text-white">resilient system</span>
        . Evolving continuously, it stays ahead of emerging patterns, providing{' '} 
        <span className="font-extrabold text-white">reliable</span> 
        {' '}forecasts for proactive community protection.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;