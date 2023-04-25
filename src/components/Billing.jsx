import { apple, cad, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={cad} alt="billing" className="w-[100%] h-[90%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      CAD <br className="sm:block hidden" /> Designing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We also provide CAD Designing Services, 2D Drafting, 3D Modelling, Rendering, Animation to customers at a very cheap price. CAD design projects seldom follow a consistent timeline. Often, design teams will have a large influx of work that makes resource allocation difficult. By bringing in outside experts, organizations can fill resource gaps and keep projects on track.
      </p>

      
    </div>
  </section>
);

export default Billing;
