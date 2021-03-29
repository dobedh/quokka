import mongoose, { Mongoose } from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
});

const model = mongoose.model("Note", NoteSchema);

export default model;
