import dotenv from "dotenv";
dotenv.config();

import "./models/Note";
import app from "./app";

const PORT = process.env.PORT;

const handleInit = () => console.log(`✅  Listening https://localhost:${PORT}`);

app.listen(PORT, handleInit);
