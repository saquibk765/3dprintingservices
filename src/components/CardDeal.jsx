import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Product Packaging <br className="sm:block hidden" />  
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Transform Your Products with Eye-Catching and Functional Packaging Designs - Trust Our 3D Designing Services, We are partnered with  organizations that provide sustainable product packaging utilizing stubble.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
