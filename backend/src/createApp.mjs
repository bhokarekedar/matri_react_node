import express from "express";
import routes from "./routes/index.mjs";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import "./strategies/local-strategy.mjs";

export function createApp() {
	const app = express();
	app.use(cors())
	app.use(express.json());
	app.use(cookieParser("helloworld"));
	app.use(
		session({
			secret: process.env.SECRET_KEY,
			saveUninitialized: true,
			resave: false,
			cookie: {
				maxAge: 60000 * 60,
			},
			store: MongoStore.create({
				client: mongoose.connection.getClient(),
			}),
		})
	);

	app.use(passport.initialize());
	app.use(passport.session());

	app.use(routes);

	return app;
}