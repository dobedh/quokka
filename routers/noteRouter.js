import express from "express";
import { getNote, postNote } from "../controllers/noteController";

const noteRouter = express.Router();

noteRouter.get("/", getNote);
noteRouter.post("/", postNote);

export default noteRouter;
