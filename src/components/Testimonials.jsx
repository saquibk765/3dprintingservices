import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { gen } from "../assets";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-row relative `}>
     
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    <div className=" ">
    <img src={gen} alt="billing" className="w-[100%] h-[80%] relative z-[1]" />
    </div>
    
  </section>
);

export default Testimonials;
