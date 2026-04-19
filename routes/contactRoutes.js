import express from "express";
import {
  createContact,
  getContacts,
} from "../controllers/contactControllers.js";
import validate from "../middleware/validate.js";
import { contactSchema } from "../validators/contactSchema.js";

const router = express.Router();
router.post("/", validate(contactSchema), createContact);
router.get("/", getContacts);
export default router;
