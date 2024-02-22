import mongoose from "mongoose";

const ReligionSchema = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true,
	}
});

export const ReligionData = mongoose.model("Religion", ReligionSchema);