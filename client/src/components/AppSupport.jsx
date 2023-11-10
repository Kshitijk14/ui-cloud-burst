import React from "react";

import { apple, cbill, google } from "../assets";
import styles, { layout } from "../constants/style";

const AppSupport = () => (
  <section id="app" className={layout.sectionReverse}>

    <div className={layout.sectionImgReverse}>

      {/* App Support Img */}
      <img src={cbill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      {/* App Support Img */}

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>

      {/* App Support Content */}
      <h2 className={styles.heading2}>
        Anticipating Rainfall's <br className="sm:block hidden" /> Every Move
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our cutting-edge prediction model anticipates rainfall patterns with precision, offering invaluable foresight to plan and protect. Stay one step ahead of the weather, safeguarding lives and assets from unexpected downpours.
      </p>
      {/* App Support Content */}

      {/* App Integration Img */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
      {/* App Integration Img */}

    </div>

  </section>
);

export default AppSupport;
