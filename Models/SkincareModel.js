import mongoose from "mongoose";

const skincareSchema = new mongoose.Schema({
  name: String,
  duration: String,
  content: String,
  price: Number,
});

export const Skincare =
  mongoose.models.Skincare || mongoose.model("Skincare", skincareSchema);
