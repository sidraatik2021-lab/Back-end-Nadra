import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  name: String,
  sessions: Number,
  oldPrice: Number,
  newPrice: Number,
  type: String,
});

export const Offer =
  mongoose.models.Offer || mongoose.model("Offer", offerSchema);
