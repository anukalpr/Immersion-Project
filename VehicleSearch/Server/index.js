const express=require("express");
const connection=require("./database/db");
const vehicleRoutes = require("./Routes/routes");
const cors=require("cors");
const port=4000;
const app=express();

app.use(cors());
app.use(express.json());
connection();

app.use("/vehicle-routes", vehicleRoutes);
app.get('/',(req,res)=>{
    res.send("Server is Running");
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})