import mongoose from "mongoose";

const UsersFamilyInfoSchema = new mongoose.Schema(
  {
    family_type: {
      type: mongoose.Schema.Types.String,
    },
    mother: {
      type: mongoose.Schema.Types.String,
    },
    father: {
      type: mongoose.Schema.Types.String, 
    },
    brother: {
      type: mongoose.Schema.Types.String,
    },
    sister: {
      type: mongoose.Schema.Types.String,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersFamilyInfo = mongoose.model("UsersFamilyInfo", UsersFamilyInfoSchema);
