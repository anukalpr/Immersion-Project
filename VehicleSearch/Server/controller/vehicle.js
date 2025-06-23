const Vehicle = require('../model/vehicle');

// GET all vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

// POST a new vehicle
const createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    const savedVehicle = await vehicle.save();
    res.status(201).json(savedVehicle);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create vehicle' });
  }
};

// GET single vehicle by ID
const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving vehicle' });
  }
};

// PUT update vehicle
const updateVehicle = async (req, res) => {
  try {
    const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update vehicle' });
  }
};

// DELETE vehicle
const deleteVehicle = async (req, res) => {
  try {
    const deleted = await Vehicle.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Vehicle not found' });
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete vehicle' });
  }
};

module.exports = {
  getAllVehicles,
  createVehicle,
  getVehicleById,
  updateVehicle,
  deleteVehicle
};