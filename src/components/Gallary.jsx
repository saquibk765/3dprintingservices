import React from 'react';
import PropTypes from 'prop-types';
import styles from "../style";
import Navbar from "./Navbar"
import Image1 from "../assets/p1.png"
import Image2 from "../assets/p2.png"
import Image3 from "../assets/p3.png"
import Image4 from "../assets/p4.png"
import Image5 from "../assets/p5.png"
import Image6 from "../assets/p6.png"
import Image7 from "../assets/p7.png"
import Image8 from "../assets/p8.png"
import Image9 from "../assets/p9.png"
import Image10 from "../assets/p10.png"
import Image11 from "../assets/p11.jpeg"
import Image12 from "../assets/p12.jpeg"
import Image13 from "../assets/p13.jpeg"
import Image14 from "../assets/p14.png"
import Image15 from "../assets/p15.jpeg"


const ProductCard = ({ imageSrc, name, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-64 bg-primary">
        <img className="absolute top-0 left-0 w-full h-full object-contain" src={imageSrc} alt={name} />
      </div>
      <div className="p-4 bg-primary text-white">
        <h2 className="text-lg font-medium mb-2">{name}</h2>
        <p className="text-white text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-white font-medium text-lg">${price}</p>
          <a href='https://tailwindcss.com/docs/justify-content' target='_blank'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
             Contact us
          </button>
          </a>
         
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      imageSrc: Image1,
      name: 'Dual Name',
      description: 'This is the Dual Name model which is very interesting.',
      price: 19.99,
    },
    {
      id: 2,
      imageSrc: Image2,
      name: 'Action Figures',
      description: 'We also print high quality customized action figures.',
      price: 29.99,
    },
    {
      id: 3,
      imageSrc: Image3,
      name: 'Customized Lamp',
      description: 'We also print customized lamps.',
      price: 39.99,
    },
    {
      id: 4,
      imageSrc: Image4,
      name: 'Wall Design',
      description: 'We also print desirable wall designs and hangings.',
      price: 49.99,
    },
    {
      id: 5,
      imageSrc:Image5,
      name: 'Action Figure',
      description: 'We also print high quality customized action figures.',
      price: 59.99,
    },
    {
      id: 6,
      imageSrc: Image6,
      name: 'Action Figure',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 7,
      imageSrc: Image7,
      name: 'Moon Lamp',
      description: 'The moon lamps glow in the dark.',
      price: 69.99,
    },
    {
      id: 8,
      imageSrc: Image8,
      name: 'Wall-E',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 9,
      imageSrc: Image9,
      name: 'Action Figure',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 10,
      imageSrc: Image10,
      name: 'Customized_Keychain',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 11,
      imageSrc: Image11,
      name: 'Customized_Penholder',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 12,
      imageSrc: Image12,
      name: 'Customized_Penholder',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 13,
      imageSrc: Image13,
      name: 'Customized_Penholder',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 14,
      imageSrc: Image14,
      name: 'Customized_Vase',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },
    {
      id: 15,
      imageSrc: Image15,
      name: 'Customized_Peacock',
      description: 'We also print high quality customized action figures.',
      price: 69.99,
    },

  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 m-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.imageSrc}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ))}
</div>
</div>
);
};

export default ProductsPage;