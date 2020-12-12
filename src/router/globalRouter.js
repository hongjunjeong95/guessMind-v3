import express from "express";
import { home } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
