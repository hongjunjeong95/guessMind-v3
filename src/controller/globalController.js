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

export const postSignUp = async (req, res) => {
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
    console.log(user);
    await User.register(user, password);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
