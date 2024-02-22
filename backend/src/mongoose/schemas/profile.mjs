import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    profile_for: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    first_name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    middle_name: {
      type: mongoose.Schema.Types.String,
    },
    last_name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    gender: {
      type: mongoose.Schema.Types.String,
	  required: true,
    },
    marital_status: {
      type: mongoose.Schema.Types.String,
	  required: true,
    },
    mother_tongue: {
      type: mongoose.Schema.Types.String,
    },
    date_of_birth: {
      type: mongoose.Schema.Types.Date,
	  required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", ProfileSchema);
