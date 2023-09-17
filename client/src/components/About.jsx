import React from "react";

import Button from "./Button";
import { features } from "../constants/content";
import styles, { layout } from "../constants/style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () =>  (
  <section id="about" className={layout.section}>

    <div className={layout.sectionInfo}>

      {/* About Content */}
      <h2 className={styles.heading2}>
        Empowering Safety, <br className="sm:block hidden" /> Through Cloud Insights
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our cloud burst prediction model leverages advanced meteorological data and AI algorithms to provide real-time forecasts. We empower you to proactively protect lives and assets from sudden heavy rainfall and flash floods with precision and confidence.
      </p>
      {/* About Content */}

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    
  </section>
);

export default About;
