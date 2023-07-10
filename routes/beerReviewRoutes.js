import { Router } from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  addBeerReview,
  deleteReview,
  getAllReviewsByUser,
  getReviewsForBeerByUser,
  updateBeerReview,
} from "../controllers/beerReviewController.js";

const router = Router();

// all should have ptohrect
router.route("/").get(getAllReviewsByUser).post(addBeerReview);
router
  .route("/:id")
  .get(getReviewsForBeerByUser)
  .put(updateBeerReview)
  .delete(deleteReview);

export default router;
