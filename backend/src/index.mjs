import mongoose from "mongoose";
import { createApp } from "./createApp.mjs";


// MongoClient
// 	.connect("mongodb://localhost/matri", (err, db) => {
// if(err) throw err;
// 		var dbo = db.db('matri');
// 		dbo.collction('countries').ini
// 	})
// 	.then(() => {
// 		console.log("Country", Country.getAllCountries())
// 		return console.log("Connected to Database")
// 	})
// 	.catch((err) => console.log(`Error: ${err}`));


mongoose
	.connect("mongodb://localhost/matri")
	.then(() => {
		// console.log("Country", Country.getAllCountries())
		return console.log("Connected to Database")
	})
	.catch((err) => console.log(`Error: ${err}`));

const app = createApp();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});