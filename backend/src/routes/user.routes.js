import express from "express";
import {
  create,
  list,
  read,
  update,
  remove,
  userById,
} from "../controllers/user.controller.js";
const router = express.Router();

router.route("/api/users").get(list).post(create);

router.route("/api/users/:userId").get(read).put(update).delete(remove);
router.param("userId", userById);
export default router;
