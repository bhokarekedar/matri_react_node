import mongoose from "mongoose";

const UsersImagesSchema = new mongoose.Schema(
  {
    images: [{
        type: String 
    }],
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UserImages = mongoose.model("UserImages", UsersImagesSchema);
