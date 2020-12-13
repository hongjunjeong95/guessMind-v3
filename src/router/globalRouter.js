import express from "express";
import routes from "../../routes";
import { getSignUp, postSignUp, home } from "../controller/globalController";
import { uploadAvatar } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

// sign-up
globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, uploadAvatar, postSignUp);

export default globalRouter;
