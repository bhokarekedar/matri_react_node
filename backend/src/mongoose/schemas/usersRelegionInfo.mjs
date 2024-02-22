import mongoose from "mongoose";

const UsersRelegionInfoSchema = new mongoose.Schema(
  {
    religion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Religion"
    },
    sub_religion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubReligion"  
    },
    caste: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caste"
    },
    other_caste: {
      type: mongoose.Schema.Types.String,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersRelegionInfo = mongoose.model("UsersRelegionInfo", UsersRelegionInfoSchema);
