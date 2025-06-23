import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateVehicles = () => {
  const [formData, setFormData] = useState({
    vehicleName: '',
    price: '',
    image: '',
    desc: '',
    brand: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/vehicle-routes/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error('Error fetching vehicle:', err));
  }, [id]);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/vehicle-routes/${id}`, formData);
      alert('Vehicle updated successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error updating vehicle:', err);
      alert('Update failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="vehicleName" value={formData.vehicleName} onChange={handleChange} required />
      <input name="price" type="number" value={formData.price} onChange={handleChange} required />
      <input name="image" value={formData.image} onChange={handleChange} required />
      <input name="desc" value={formData.desc} onChange={handleChange} required />
      <input name="brand" value={formData.brand} onChange={handleChange} required />
      <button type="submit">Update Vehicle</button>
    </form>
  );
};

export default UpdateVehicles;