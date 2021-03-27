import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
});

const model = mongoose.model("Note", NoteSchema);

export default model;
