import { de } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';


const CardDeal = () => {

  const navigate = useNavigate();
  function handleClick() {
    console.log("hi")
    navigate('/customised-products');

  }

  return (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Wanna gift your loved one’s customized
          printed products?<br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Have look at our beautiful 3D Printed customized products to gift your loved ones. Click on the button to see products and their pricing.
        </p>

        <Button handleClick={handleClick}> styles={`mt-10`} </Button>



      </div>

      <div className={layout.sectionImg}>
        <img src={de} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>

  );
};

export default CardDeal
