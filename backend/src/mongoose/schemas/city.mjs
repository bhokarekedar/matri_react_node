import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
	city_name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	countryCode: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	stateCode: {
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

export const CityData = mongoose.model("City", CitySchema);