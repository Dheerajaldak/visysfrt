import React, { useState } from 'react';
import axios from 'axios';

const Form5 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        address: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending data to the backend server (Express API)
            await axios.post("http://localhost:5000/api/forms/form5", formData); // Updated URL
            alert("Data Submitted Successfully");
        } catch (error) {
            alert("Error submitting data");
        }
    };
    
    

    return (
        <div className="max-w-lg mx-auto my-8 p-6 border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Form 5</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
        </div>
    );
};

export default Form5;
