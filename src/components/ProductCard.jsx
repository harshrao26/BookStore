import React from 'react';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-md transform transition duration-300 hover:scale-105">
      {/* Product Image with Overlay */}
      <div className="relative">
        <img className="w-full h-56 object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 transition-opacity duration-300 hover:opacity-0"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      {/* Price and Action Button */}
      <div className="px-6 pb-6 flex items-center justify-between">
        <span className="text-green-600 font-bold text-lg space-x-2">₹{price}</span>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
