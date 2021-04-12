import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import "./db";
import passport from "passport";

import "./models/Note";
import "./models/User";

const PORT = process.env.PORT || 5000;

const handleInit = () => console.log(`✅  Listening https://localhost:${PORT}`);

app.listen(PORT, handleInit);
