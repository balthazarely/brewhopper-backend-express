import { Router } from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  addAchievement,
  createCoupon,
  deleteAchievement,
  editAchievement,
  getAllAchievements,
  getAllUserCoupons,
  getCouponById,
  redeemCoupon,
} from "../controllers/achievementController.js";

const router = Router();

// All should have protect
router.route("/").get(admin, getAllAchievements).post(admin, addAchievement);

router
  .route("/:id")
  .put(admin, editAchievement)
  .delete(admin, deleteAchievement);

router.route("/coupon").get(getAllUserCoupons).post(createCoupon);

router.route("/coupon/:id").get(getCouponById).put(redeemCoupon);

export default router;
