import React, { useState } from 'react';
import axios from 'axios';

const NewVehicles = () => {
  const [formData, setFormData] = useState({
    vehicleName: '',
    price: '',
    image: '',
    desc: '',
    brand: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/vehicle-routes', formData);
      alert('Vehicle added successfully!');
      console.log(res.data);
    } catch (err) {
      console.error('Error adding vehicle:', err);
      alert('Failed to add vehicle.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="vehicleName" placeholder="Vehicle Name" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="image" placeholder="Image URL" onChange={handleChange} required />
      <input name="desc" placeholder="Description" onChange={handleChange} required />
      <input name="brand" placeholder="Brand" onChange={handleChange} required />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default NewVehicles;