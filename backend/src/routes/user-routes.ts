import { Router } from "express";
import {
  getAllUser,
  userLogin,
  userSignUp,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signUpValidator,
  validate,
} from "../utils/validators.js";
const userRoutes = Router();

userRoutes.get("/", getAllUser);
userRoutes.post("/signup", validate(signUpValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);

export default userRoutes;
