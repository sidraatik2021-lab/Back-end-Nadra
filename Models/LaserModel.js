import mongoose from "mongoose";

const laserSchema = new mongoose.Schema({
  title: String,
  shortContent: String,
  content: String,
  price: Number,
});

export const Laser =
  mongoose.models.Laser || mongoose.model("Laser", laserSchema);
