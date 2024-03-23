import mongoose from "mongoose";

const UsersEducationAndWorkInfoSchema = new mongoose.Schema(
  {
    education: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    education_details: {
      type: mongoose.Schema.Types.String,
    },
    school_college_university: {
      type: mongoose.Schema.Types.String,
    },
    profession: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    profession_details: {
      type: mongoose.Schema.Types.String,
    },
    annual_income: {
      type: mongoose.Schema.Types.String,
    },
    present_status: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
      you_work_with: {
      type: mongoose.Schema.Types.String,
    },
    designation: {
      type: mongoose.Schema.Types.String,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersEducationAndWorkInfo = mongoose.model("UsersEducationAndWorkInfo", UsersEducationAndWorkInfoSchema);
