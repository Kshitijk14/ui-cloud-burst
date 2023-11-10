import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Hero, Stats, About, AppSupport, Product, CTA, Footer } from "./components";
import { PreSave } from "./pages";
import styles from "./constants/style";

const App = () => (
<>

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path='/' element={
      <>
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
          </div>
        </div>
      </>
      } />
      <Route path='/pre-save' element={<PreSave />} />
    </Routes>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>

</>
);

export default App;
