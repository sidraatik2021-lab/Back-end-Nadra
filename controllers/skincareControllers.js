import { Skincare } from "../Models/SkincareModel.js";
export const getSkincares = async (req, res) => {
  const skincares = await Skincare.find();
  res.json(skincares);
};
export const getSkincare = async (req, res) => {
  const skincare = await Skincare.findById(req.params.id);
  if (!skincare) return res.status(404).json({ message: "Skincare not found" });
  res.json(skincare);
};
export const createSkincare = async (req, res) => {
  const skincare = await Skincare.create(req.body);
  res.json({ message: "Skincare added successfully", skincare });
};
export const updateSkincare = async (req, res) => {
  const skincare = await Skincare.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!skincare) return res.status(404).json({ message: "Skincare not found" });
  res.json({ message: "Skincare updated successfully", skincare });
};
export const deleteSkincare = async (req, res) => {
  const skincare = await Skincare.findByIdAndDelete(req.params.id);
  if (!skincare) return res.status(404).json({ message: "Skincare not found" });
  res.json({ message: "Skincare deleted successfully" });
};
