import express from "express";
import routes from "../../routes";
import {
  getSignUp,
  postSignUp,
  home,
  getLogin,
  postLogin,
} from "../controller/globalController";
import { onlyPublic, uploadAvatar } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

// sign-up
globalRouter.get(routes.signUp, onlyPublic, getSignUp);
globalRouter.post(
  routes.signUp,
  onlyPublic,
  uploadAvatar,
  postSignUp,
  postLogin
);

// Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

export default globalRouter;
