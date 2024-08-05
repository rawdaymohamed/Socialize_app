import User from "../models/user.model.js";
import extend from "lodash/extend.js";
import { getErrorMessage } from "../helpers/dbErrorHandler.js";
export const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.json({ message: "Successfully signed up!" });
  } catch (err) {
    return res.status(400).json({ error: getErrorMessage(err) });
  }
};
export const list = async (req, res) => {
  try {
    const users = await User.find({}).select("name updated created");
    return res.json(users);
  } catch (err) {
    return res.status(400).json({ error: getErrorMessage(err) });
  }
};
export const userById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user) return res.json({ error: "User not found" });
    req.profile = user;
  } catch (err) {
    return res.json({ error: "Couldn't retrieve user" });
  }
};
export const read = (req, res) => {
  req.profile.hashedPassword = undefined;
  req.profile.salt = undefined;
  res.json(req.profile);
};
export const update = (req, res, next) => {};
export const remove = (req, res, next) => {};
