import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  addBeerToPassport,
  removeBeerFromPassport,
} from "../controllers/passportController.js";

const router = Router();

router.route("/").get(protect, getUserProfile);

// all should have ptohrect
router
  .route("/add-beer")
  .post(addBeerToPassport)
  .delete(removeBeerFromPassport);

// router.post("/auth", authUser);
// router.post("/logout", logoutUser);

export default router;
