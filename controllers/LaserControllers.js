import { Laser } from "../Models/LaserModel.js";
export const getLasers = async (req, res) => {
  const lasers = await Laser.find();
  res.json(lasers);
};
export const getLaser = async (req, res) => {
  const laser = await Laser.findById(req.params.id);
  if (!laser) return res.status(404).json({ message: "Laser not found" });
  res.json(laser);
};
export const createLaser = async (req, res) => {
  const laser = await Laser.create(req.body);
  res.json({ message: "Laser added successfully", laser });
};
export const updateLaser = async (req, res) => {
  const laser = await Laser.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!laser) return res.status(404).json({ message: "Laser not found" });
  res.json({ message: "Laser updated successfully", laser });
};
export const deleteLaser = async (req, res) => {
  const laser = await Laser.findByIdAndDelete(req.params.id);
  if (!laser) return res.status(404).json({ message: "Laser not found" });
  res.json({ message: "Laser deleted successfully" });
};
