import mongoose from "mongoose";

const UsersDietInfoSchema = new mongoose.Schema(
  {
    daily_diet: {
      type: mongoose.Schema.Types.String, 
    },
    food_preference: {
      type: mongoose.Schema.Types.String,
    },
    smoking: {
      type: mongoose.Schema.Types.String,
    },
    drinking: {
      type: mongoose.Schema.Types.String,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersDietInfo = mongoose.model("UsersDietInfo", UsersDietInfoSchema);
