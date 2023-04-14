import { de } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Wanna gift your loved one’s customized
printed products?<br className="sm:block hidden" />  
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Have look at our beautiful 3d printed customized products to gift your loved ones including customized moon lamp, picture lamp, customized key chain and many more.      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={de} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
