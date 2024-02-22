import mongoose from "mongoose";

const StateSchema = new mongoose.Schema({
	state_name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	state_city: {
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

export const StateData = mongoose.model("State", StateSchema);