import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CartPage = () => {
  // Dummy data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      price: 15.99,
      quantity: 1,
      image: 'https://example.com/great-gatsby.jpg',
    },
    {
      id: 2,
      title: '1984',
      price: 12.49,
      quantity: 2,
      image: 'https://example.com/1984.jpg',
    },
  ]);

  // Update quantity of items
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row">
          {/* Cart Items */}
          <div className="lg:w-3/4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <img src={item.image} alt={item.title} className="w-24 h-32 object-cover" />
                <div className="flex-1 px-4">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="mt-2 text-red-500 hover:underline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/4 bg-gray-100 p-6 rounded-lg mt-6 lg:mt-0 lg:ml-8">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Total Items:</span>
              <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total Price:</span>
              <span>${calculateTotal()}</span>
            </div>
            <Link to='/shipping' className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
