import React from 'react';
import PropTypes from 'prop-types';
import styles from "../style";
import Navbar from "./Navbar"
import Image1 from "../assets/ps1.png"
import Image2 from "../assets/ps2.png"
import Image3 from "../assets/ps3.png"
import Image4 from "../assets/ps4.png"
import Image5 from "../assets/ps5.png"
import Image6 from "../assets/ps6.jpeg"
import Image7 from "../assets/ps7.jpeg"


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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
           Contact us
        </button>
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
      name: 'Hexacopter Dome Frame',
      description: 'We printed Hexacopter Dome Frame for Aerostars.',
      //price: 19.99,
    },
    {
      id: 2,
      imageSrc: Image2,
      name: 'Room Layout ',
      description: 'We also print prototypes for architectural layouts.',
      //price: 29.99,
    },
    {
      id: 3,
      imageSrc: Image3,
      name: 'Dual Nut',
      description: 'This nut/bolt assembly can lock/unlock in both directions.',
      //price: 39.99,
    },
    {
      id: 4,
      imageSrc: Image4,
      name: 'Festive goodies',
      description: 'We also print festive materials like Christmas Tree.',
      //price: 49.99,
    },
    {
      id: 5,
      imageSrc:Image5,
      name: 'Magnetic Lamp',
      description: 'Customize magnetic lamp which glows.',
      //price: 59.99,
    },
    {
      id: 6,
      imageSrc:Image6,
      name: 'Drone_Frame',
      description: 'Printed Drone frame for one of customer.',
      //price: 59.99,
    },
    {
      id: 7,
      imageSrc:Image7,
      name: 'Face_shield',
      description: 'Printed Drone frame for one of customer.',
      //price: 59.99,
    },

  ];
    return (
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
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