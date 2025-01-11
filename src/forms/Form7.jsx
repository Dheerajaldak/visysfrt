import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form7 = () => {
  const [formData, setFormData] = useState(null);  
  const [error, setError] = useState(null);       
  const [loading, setLoading] = useState(true);   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forms/forms7');
        setFormData(response.data);  
        setLoading(false);            
      } catch (error) {
        setError("Error fetching form data"); 
        setLoading(false);  
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin border-t-4 border-blue-500 w-16 h-16 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Form 7: Combined Data</h1>
      <div className="space-y-6">
        {/* Loop through formData to display each form */}
        {Object.keys(formData).map((formKey) => {
          const form = formData[formKey];
          return (
            <div key={formKey} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{formKey.replace(/_/g, " ").toUpperCase()}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Loop through each field in the form */}
                {Object.entries(form).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium">{key.replace(/_/g, " ").toUpperCase()}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form7;
