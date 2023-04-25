import styles from "../style";
 

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Convert your imaginations into reality
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZDUoch9DexPLk-9huytq7gZQU0o0Js1zUO1CEnWdGJ3zlsQ/viewform" target="_blank" >
  <button type="button"  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
 
    Get Started
  </button>
  </a>
    </div>
  </section>
);

export default CTA;
