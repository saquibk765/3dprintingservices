import React from 'react';
import PropTypes from 'prop-types';
import styles from "../style";
import Navbar from "./Navbar"
import Image1 from "../assets/ps1.png"
import Image2 from "../assets/ps2.png"
import Image3 from "../assets/ps3.png"
import Image4 from "../assets/ps4.png"
import Image5 from "../assets/ps5.png"


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
      name: 'Product one',
      description: 'Description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      imageSrc: Image2,
      name: 'Product ',
      description: 'Description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      imageSrc: Image3,
      name: 'Product 3',
      description: 'Description of product 3.',
      price: 39.99,
    },
    {
      id: 4,
      imageSrc: Image4,
      name: 'Product 4',
      description: 'Description of product 4.',
      price: 49.99,
    },
    {
      id: 5,
      imageSrc:Image5,
      name: 'Product 5',
      description: 'Description of product 5.',
      price: 59.99,
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