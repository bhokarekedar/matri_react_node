import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
	country_name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	country_state: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	latitude: {
		type: mongoose.Schema.Types.String,
	},
	longitude: {
		type: mongoose.Schema.Types.String,
	}
});

export const CountryData = mongoose.model("Country", CountrySchema);