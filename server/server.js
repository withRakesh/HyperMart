const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('../server/routes/authroutes');
const  productRoutes = require('../server/routes/productRoutes');

dotenv.config();
const app = express();

app.use(cors({
   origin: "https://hypermartapp.netlify.app",
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/get',  productRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("connection failed", err));

app.listen(process.env.PORT ||  5000, () =>
  console.log(`server is running on port ${process.env.PORT || 5000}`)
);

console.log("MONGO_URI:", process.env.MONGO_URI);
