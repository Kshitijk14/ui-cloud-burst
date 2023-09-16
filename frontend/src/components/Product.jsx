import { wety } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Product = () => (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Data-Driven Predictions <br className="sm:block hidden" /> at Your Fingertips
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Empowering businesses and communities with real-time cloud burst insights for informed decisions and enhanced safety during storms.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={wety} alt="product" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Product;
