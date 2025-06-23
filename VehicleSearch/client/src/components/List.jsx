import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/vehicle-routes')
      .then(res => setVehicles(res.data))
      .catch(err => console.error('Failed to fetch vehicles:', err));
  }, []);

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:4000/vehicle-routes/${id}`);
      setVehicles(prev => prev.filter(vehicle => vehicle._id !== id));
      alert('Vehicle deleted!');
    } catch (err) {
      console.error('Error deleting vehicle:', err);
    }
  };

  const handleUpdate = id => {
    navigate(`/update-vehicle/${id}`);
  };

  const handleAddVehicle = () => {
    navigate('/add-vehicle');
  };

  return (
    <div>
      <h2>Vehicle List</h2>
      <button onClick={handleAddVehicle} style={{ marginBottom: '20px' }}>
        Add New Vehicle
      </button>
      {vehicles.map(vehicle => (
        <div key={vehicle._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{vehicle.vehicleName}</h3>
          <p>Price: ₹{vehicle.price}</p>
          <p>Brand: {vehicle.brand}</p>
          <div>
          <button onClick={() => navigate(`/view-vehicle/${vehicle._id}`)}>Show</button>
            <button onClick={() => handleUpdate(vehicle._id)}>Update</button>
            <button onClick={() => handleDelete(vehicle._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;