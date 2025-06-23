import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewVehicle = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/vehicle-routes/${id}`)
      .then(res => setVehicle(res.data))
      .catch(err => console.error('Error fetching vehicle details:', err));
  }, [id]);

  if (!vehicle) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Vehicle Details</h2>
      <img
        src={vehicle.imageUrl || vehicle.image || 'https://via.placeholder.com/400x250.png?text=No+Image'}
        alt={vehicle.vehicleName}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
      <p><strong>Name:</strong> {vehicle.vehicleName}</p>
      <p><strong>Brand:</strong> {vehicle.brand}</p>
      <p><strong>Price:</strong> ₹{vehicle.price}</p>
      <p><strong>Description:</strong> {vehicle.desc}</p>
    </div>
  );
};

export default ViewVehicle;