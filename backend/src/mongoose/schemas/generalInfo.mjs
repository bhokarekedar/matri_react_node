import mongoose from "mongoose";

const GeneralInfoSchema = new mongoose.Schema({
  moonsign: {
    type: mongoose.Schema.Types.Array,
  },
  horosMatch: {
    type: mongoose.Schema.Types.Array,
  },
  genderValues: {
    type: mongoose.Schema.Types.Array,
  },
  maritalStatus: {
    type: mongoose.Schema.Types.Array,
  },
  numberOfChildren: {
    type: mongoose.Schema.Types.Array,
  },
  livingWithParentStatus: {
    type: mongoose.Schema.Types.Array,
  },
  profileCreatedBy: {
    type: mongoose.Schema.Types.Array,
  },
  height: {
    type: mongoose.Schema.Types.Array,
  },
  weight: {
    type: mongoose.Schema.Types.Array,
  },
  bloodGroup: {
    type: mongoose.Schema.Types.Array,
  },
  complexion: {
    type: mongoose.Schema.Types.Array,
  },
  physicalStatus: {
    type: mongoose.Schema.Types.Array,
  },
  PhysicalStatusDetails: {
    type: mongoose.Schema.Types.Array,
  },
  bodyType: {
    type: mongoose.Schema.Types.Array,
  },
  diet_type: {
    type: mongoose.Schema.Types.Array,
  },
  yes_or_no: {
    type: mongoose.Schema.Types.Array,
  },
  income: {
    type: mongoose.Schema.Types.Array,
  },
  education: {
    type: mongoose.Schema.Types.Array,
  },
  employer: {
    type: mongoose.Schema.Types.Array,
  },
  yes_or_no_abroad: {
    type: mongoose.Schema.Types.Array,
  },
  mothers_occupation: {
    type: mongoose.Schema.Types.Array,
  },
  fathers_occupation: {
    type: mongoose.Schema.Types.Array,
  },
  sisters_or_brothers: {
    type: mongoose.Schema.Types.Array,
  },
  family_status: {
    type: mongoose.Schema.Types.Array,
  },
  family_values: {
    type: mongoose.Schema.Types.Array,
  }
});

export const GeneralInfoData = mongoose.model("GeneralInfo", GeneralInfoSchema);
