import express from "express";
import { note } from "../controllers/noteController";

const noteRouter = express.Router();

noteRouter.use("/", note);

export default noteRouter;
