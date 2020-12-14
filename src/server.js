import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import { join } from "path";

import { localMiddleware } from "./middlewares";

import globalRouter from "./router/globalRouter";
import routes from "../routes";

import "./db";
import "./passport";

const PORT = 4000;
const app = express();
const CookieStore = MongoStore(session);

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use("/static", express.static(join(__dirname, "static")));

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.use(routes.home, globalRouter);

app.listen(PORT, handleListening);
