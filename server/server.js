const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('../server/routes/authroutes');
const  productRoutes = require('../server/routes/productRoutes');
const electronicRoute = require('../server/routes/ElectronicRoute');
const  FationRoute = require('../server/routes/FationRoute');
const GroceriesRoute = require('../server/routes/GroceriesRoute');
const BeautyRoute = require('../server/routes/BeautyRoute');

dotenv.config();
const app = express();

app.use(cors({
  origin: ["https://hypermartapp.netlify.app", "http://localhost:5173"],
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/get',  productRoutes)
app.use('/api/post',  productRoutes)
app.use('/api/post',  electronicRoute)
app.use('/api/get',  electronicRoute)
app.use('/api/post',   FationRoute)
app.use('/api/get',   FationRoute)
app.use('/api/post',   GroceriesRoute)
app.use('/api/get',   GroceriesRoute)
app.use('/api/post',   BeautyRoute)
app.use('/api/get',   BeautyRoute)
 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("connection failed", err));

app.listen(process.env.PORT ||  5000, () =>
  console.log(`server is running on port ${process.env.PORT || 5000}`)
);

console.log("MONGO_URI:", process.env.MONGO_URI);

console.log(process.env.MONGO_URI)