import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: {
    type: Number,
  },
  title: {
    type: String,
    required: "제목을 써주세요",
  },
  content: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("Post", PostSchema);

export default model;
