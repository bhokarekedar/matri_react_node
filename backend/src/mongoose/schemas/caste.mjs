import mongoose from "mongoose";

const CasteSchema = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	 sub_religion_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "SubReligion",
	},
});

export const CasteData = mongoose.model("Caste", CasteSchema);