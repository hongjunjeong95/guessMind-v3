import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { join } from "path";

import { localMiddleware } from "./middlewares";

import globalRouter from "./router/globalRouter";
import routes from "../routes";

import "./db";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(localMiddleware);

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.use(routes.home, globalRouter);

app.listen(PORT, handleListening);
