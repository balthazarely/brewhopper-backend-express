import { Router } from "express";
import {
  getBreweries,
  getBreweryById,
  addNewBrewery,
  deleteBrewery,
  updateBrewery,
  getAllBeersAtBrewery,
} from "../controllers/breweryController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(getBreweries).post(protect, admin, addNewBrewery);

// all should have ptohrect expect the get routes
router
  .route("/:id")
  .get(getBreweryById)
  .put(admin, updateBrewery)
  .delete(admin, deleteBrewery);
router.route("/:id/beers").get(getAllBeersAtBrewery).post(addNewBrewery);

export default router;
