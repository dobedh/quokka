import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  userFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ DB connected");
const handleError = (error) => console.log(`ERROR IN DB : ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
