
import React, { useState } from 'react';

const Form4 = () => {
  const [formData, setFormData] = useState({
    emergencyContactName: '',
    relationship: '',
    phone: '',
    email: '',
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
    console.log('Emergency Contact Submitted:', formData);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Emergency Contact</h2>
      <div className="mb-4">
        <label htmlFor="emergencyContactName" className="block text-gray-700">Emergency Contact Name</label>
        <input
          type="text"
          id="emergencyContactName"
          name="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Emergency Contact Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="relationship" className="block text-gray-700">Relationship</label>
        <input
          type="text"
          id="relationship"
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Relationship"
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
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
        Save Emergency Contact
      </button>
    </form>
  );
};

export default Form4;
