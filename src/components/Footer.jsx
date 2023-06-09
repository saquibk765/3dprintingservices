import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" flex flex-col justify-center	text-center content-center  ">
        <img
          src={logo}
          alt="PRINT3D"
          className="w-[266px] h-[72.14px] object-contain mx-auto"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>  
          Created and Maintained by 
          <a href='https://www.linkedin.com/in/saquibkhan7/' target='_blank'>
          <button className="bg-blue-500 hover:bg-black text-white px-4 py-2 rounded-md">
             Saquib Khan
          </button>
          </a>
        </p>
      </div>

     
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 PRINT3D. All Rights Reserved. 
      </p>
      

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
