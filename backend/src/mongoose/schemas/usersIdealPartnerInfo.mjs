import mongoose from "mongoose";

const UsersIdealPartnerInfoSchema = new mongoose.Schema(
  {
    preferred_age_range: {
      type: mongoose.Schema.Types.String,
    },
    preferred_height_range: {
      type: mongoose.Schema.Types.String,
    },
    preferred_build: {
      type: mongoose.Schema.Types.String, 
    },
    preferred_marital_status: {
      type: mongoose.Schema.Types.String,
    },
    preferred_family_type: {
      type: mongoose.Schema.Types.String,
    },
    preferred_city_living_in: {
      type: mongoose.Schema.Types.String,
    },
    preferred_working_partner: {
      type: mongoose.Schema.Types.String,
    },
    preferred_education: {
      type: mongoose.Schema.Types.String,
    },
    preferred_minimum_income_per_Annum: {
      type: mongoose.Schema.Types.String,
    },
    preferred_looking_for: {
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
