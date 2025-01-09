
import React, { useState } from 'react';

const Form2 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Personal Information Submitted:', formData);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="First Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Phone Number"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700">Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Address"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
        Save Information
      </button>
    </form>
  );
};

export default Form2;
