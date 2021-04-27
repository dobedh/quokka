import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "제목을 써주세요",
  },
  content: String,
  views: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
  },
});

const model = mongoose.model("Post", PostSchema);

export default model;
