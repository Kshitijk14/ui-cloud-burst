import React from "react";

import { Navbar, Hero, Stats, About, AppSupport, Product, CTA, Footer } from "./components";
import styles from "./constants/style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <About />
        <AppSupport />
        <Product />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
