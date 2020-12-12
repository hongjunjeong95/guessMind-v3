import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { join } from "path";

import globalRouter from "./router/globalRouter";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(morgan());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.use("/", globalRouter);

app.listen(PORT, handleListening);
