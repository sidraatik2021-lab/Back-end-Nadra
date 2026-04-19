import express from "express";
import skincareRoutes from "./routes/skincareRoutes.js";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import offersRoutes from "./routes/offersRoutes.js";
import laserRoutes from "./routes/laserRoutes.js";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/skincare", skincareRoutes);
app.use("/offers", offersRoutes);
app.use("/laser", laserRoutes);
app.use("/contact", contactRoutes);
connectDB();
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
