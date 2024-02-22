import mongoose from "mongoose";

const UsersContactInfoSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    mobile_number: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    home_phone: {
      type: mongoose.Schema.Types.String,
    },
    current_location: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    parent_location: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersContactInfo = mongoose.model("UsersContactInfo", UsersContactInfoSchema);
