import mongoose from "mongoose";

const UsersPersonalInfoSchema = new mongoose.Schema(
  {
    height: {
      type: mongoose.Schema.Types.String,
     
    },
    weight: {
      type: mongoose.Schema.Types.String,
     
    },
    eye_color: {
      type: mongoose.Schema.Types.String,
     
    },
    hair_color : {
      type: mongoose.Schema.Types.String,
     
    },
    skin_color: {
      type: mongoose.Schema.Types.String,
     
    },
    use_specs_or_contact_lenses: {
      type: mongoose.Schema.Types.Boolean,
      require: true,
    },
    special_condition: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    special_condition_details: {
      type: mongoose.Schema.Types.String,
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersPersonalInfo = mongoose.model("UsersPersonalInfo", UsersPersonalInfoSchema);
