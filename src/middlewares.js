import routes from "../routes";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Guess Mind";
  next();
};

const multerAvatar = multer({ dest: "uploads/avatars" });

export const uploadAvatar = multerAvatar.single("avatar");
