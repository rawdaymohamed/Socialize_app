import express from "express";
import {
  create,
  list,
  read,
  update,
  remove,
  userById,
} from "../controllers/user.controller.js";
import {
  requireLogin,
  hasAuthorization,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.route("/api/users").get(list).post(create);
router.param("userId", userById);

router
  .route("/api/users/:userId")
  .get(requireLogin, read)
  .put(requireLogin, hasAuthorization, update)
  .delete(requireLogin, hasAuthorization, remove);
export default router;
