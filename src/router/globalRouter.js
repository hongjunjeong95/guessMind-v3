import express from "express";
import routes from "../../routes";
import { getSignUp, postSignUp, home } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

// sign-up
globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, postSignUp);

export default globalRouter;
