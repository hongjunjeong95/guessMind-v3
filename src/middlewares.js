import routes from "./routes";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Guess Mind";
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

const multerAvatar = multer({ dest: "uploads/avatars" });

export const uploadAvatar = multerAvatar.single("avatar");
