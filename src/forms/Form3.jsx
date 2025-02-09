import React, { useState } from 'react';
import axios from 'axios';

const Form3 = () => {
  const [formData, setFormData] = useState({
    preferredContactMethod: '',
    contactTime: '',
    receiveNewsletter: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend API
      const response = await axios.post('http://localhost:5000/api/forms/forms3', formData);
      console.log('Form data submitted successfully:', response.data);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Error submitting data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Preferences</h2>
      <div className="mb-4">
        <label htmlFor="preferredContactMethod" className="block text-gray-700">Preferred Contact Method</label>
        <select
          id="preferredContactMethod"
          name="preferredContactMethod"
          value={formData.preferredContactMethod}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select a method</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="mail">Mail</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="contactTime" className="block text-gray-700">Preferred Contact Time</label>
        <input
          type="text"
          id="contactTime"
          name="contactTime"
          value={formData.contactTime}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Morning, Afternoon, Evening"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="receiveNewsletter" className="block text-gray-700">Receive Newsletter?</label>
        <input
          type="checkbox"
          id="receiveNewsletter"
          name="receiveNewsletter"
          checked={formData.receiveNewsletter}
          onChange={handleChange}
          className="form-checkbox text-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
        Save Preferences
      </button>
    </form>
  );
};

export default Form3;
