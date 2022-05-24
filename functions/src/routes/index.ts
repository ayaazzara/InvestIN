import * as express from "express";
import { createUser, login } from "../controllers/authController";
import {
  addExplore,
  deleteExplore,
  getAllExplore,
  updateExplore,
} from "../controllers/exploreController";
import isAuthorizedUser from "../middlewares/authHandler";

const router = express.Router();
router.use(express.json());

router.use(express.urlencoded({ extended: true }));

router.post("/register", createUser);
router.post("/login", login);

router.get("/explore", isAuthorizedUser, getAllExplore);
router.post("/explore", isAuthorizedUser, addExplore);
router.patch("/explore/:exploreId", isAuthorizedUser, updateExplore);
router.delete("/explore/:exploreId", isAuthorizedUser, deleteExplore);

export default router;
