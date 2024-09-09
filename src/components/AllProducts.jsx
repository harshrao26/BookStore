import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'Awesome Book',
      price: 2559.99,
      description: 'A must-read book for developers.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'Awesome Book 2',
      price: 5859.99,
      description: 'Keep A must-read book for developers',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      title: 'Awesome Book',
      price: 499.99,
      description: 'A must-read book for developers',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
