import mongoose from "mongoose";

const SubReligionSchema = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	religion_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Religion",
	},
});

export const SubReligionData = mongoose.model("SubReligion", SubReligionSchema);