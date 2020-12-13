import passport from "passport";
import routes from "../../routes";
import User from "../models/User";

export const home = (req, res) => {
  try {
    res.render("home", { pageTitle: "home" });
  } catch (error) {
    console.log(error);
  }
};

export const getSignUp = (req, res) => {
  try {
    res.render("signUp", { pageTitle: "signUp" });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postSignUp = async (req, res, next) => {
  const {
    body: { username, email, password, password2 },
    file,
  } = req;

  if (password !== password2) {
    res.status(400);
    res.redirect(routes.home);
  }
  try {
    const user = await User({
      username,
      email,
      avatarUrl: file ? file.path : null,
    });
    await User.register(user, password);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  try {
    res.render("Login", { pageTitle: "Login" });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});
