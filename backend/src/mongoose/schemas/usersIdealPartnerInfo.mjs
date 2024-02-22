import mongoose from "mongoose";

const UsersIdealPartnerInfoSchema = new mongoose.Schema(
  {
    age_range: {
      type: mongoose.Schema.Types.String,
    },
    height_range: {
      type: mongoose.Schema.Types.String,
    },
    build: {
      type: mongoose.Schema.Types.String, 
    },
    marital_status: {
      type: mongoose.Schema.Types.String,
    },
    family_type: {
      type: mongoose.Schema.Types.String,
    },
    city_living_in: {
      type: mongoose.Schema.Types.String,
    },
    working_partner_preferred: {
      type: mongoose.Schema.Types.String,
    },
    education: {
      type: mongoose.Schema.Types.String,
    },
    minimum_income_per_Annum: {
      type: mongoose.Schema.Types.String,
    },
    looking_for: {
      type: mongoose.Schema.Types.String,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersIdealPartnerInfo = mongoose.model("UsersIdealPartnerInfo", UsersIdealPartnerInfoSchema);
