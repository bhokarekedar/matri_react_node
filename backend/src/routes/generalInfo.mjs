import { Router } from "express";
import {
	query,
	validationResult,
	checkSchema,
	matchedData,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
import { createUserHandler, getUserByIdHandler } from "../handlers/users.mjs";
import { getAllGeneralInfo } from "../handlers/generalInfo.mjs";

const router = Router();

router.get(
	"/generalInfo/",
	getAllGeneralInfo
);

export default router;


