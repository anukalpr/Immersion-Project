import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import List from "./components/List";
import NewVehicles from "./components/newVehicle";
import UpdateVehicles from "./components/updateVehicles";
import ViewVehicle from "./components/viewVehicles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<List />} />
        <Route path="/add-vehicle" element={<NewVehicles />} />
        <Route path="/update-vehicle/:id" element={<UpdateVehicles />} />
        <Route path="/view-vehicle/:id" element={<ViewVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;