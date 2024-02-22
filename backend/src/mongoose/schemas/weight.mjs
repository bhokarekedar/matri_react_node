import mongoose from "mongoose";

const WeightSchema = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
});

export const WeightData = mongoose.model("Caste", WeightSchema);