import React from "react";

import Button from "./Button";
import styles from "../constants/style";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>

    {/* CTA Content */}
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Predicting Storms, Protecting Lives.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Take control of your safety—explore our cloud burst prediction service today.
      </p>
    </div>
    {/* CTA Content */}

    {/* CTA Button */}
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles={undefined} />
    </div>
    {/* CTA Button */}

  </section>
);

export default CTA;
