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
import { createNewUser, getAllRelegions, getCasteData, getFilteredUsers, getRelatedSubRelegions, updateContactInfo, updateDietInfo, updateEducationAndWorkInfo, updateFamilyInfo, updateHorrorscopeInfo, updateIdealPartnerInfo, updatePersonalInfo, updateUsersRelegionInfo } from "../handlers/registration.mjs";

const router = Router();

router.get(
	"/api/getAllRelegions/",
	getAllRelegions
);
router.post(
	"/api/getRelatedSubRelegions/",
	getRelatedSubRelegions
);
router.post(
	"/api/getRelatedCaste/",
	getCasteData
);

router.post(
	"/api/createUser/",
	createNewUser
);

router.post(
	"/api/getFilteredUsers/",
	getFilteredUsers
);

router.post(
	"/api/updateFamilyInfo/",
	updateFamilyInfo
);

router.post(
	"/api/updateContactInfo/",
	updateContactInfo
);

router.post(
	"/api/updateDietInfo/",
	updateDietInfo
);

router.post(
	"/api/updateEducationAndWorkInfo/",
	updateEducationAndWorkInfo
);

router.post(
	"/api/updateHorrorscopeInfo/",
	updateHorrorscopeInfo
);

router.post(
	"/api/updateIdealPartnerInfo/",
	updateIdealPartnerInfo
);

router.post(
	"/api/updatePersonalInfo/",
	updatePersonalInfo
);
router.post(
	"/api/ updateUsersRelegionInfo/",
	updateUsersRelegionInfo
);
export default router;


