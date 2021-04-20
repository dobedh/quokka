import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    profile_needs_agreement: false,
    has_email: true,
    email_needs_agreement: true,
  },
  avatarUrl: String,
  kakaoId: Number,
  facebookId: Number,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
