import { Router } from "express";
import {
  getOffer,
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
} from "../controllers/offersControllers.js";
import validate from "../middleware/validate.js";
import {
  getOfferSchema,
  updateOfferSchema,
  createOfferSchema,
  deleteOfferSchema,
} from "../validators/offersschema.js";
const offersRoutes = Router();
offersRoutes.get("/", getOffers);
offersRoutes.get("/:id", validate(getOfferSchema), getOffer);
offersRoutes.post("/", validate(createOfferSchema), createOffer);
offersRoutes.put("/:id", validate(updateOfferSchema), updateOffer);
offersRoutes.delete("/:id", validate(deleteOfferSchema), deleteOffer);
export default offersRoutes;
