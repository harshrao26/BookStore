import React, { useState } from 'react';

const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, send an email, or proceed to the next step
    alert('Form submitted. Check the console for form data.');
    console.log('Shipping Address:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Address</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
