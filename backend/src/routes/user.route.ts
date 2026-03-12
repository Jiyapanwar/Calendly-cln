import { Router } from "express";
import { getMeController } from "../controllers/user.controller";
import { passportAuthenticateJwt } from "../config/passport.config";

const userRoutes = Router();

userRoutes.get("/me", passportAuthenticateJwt, getMeController);

export default userRoutes;

