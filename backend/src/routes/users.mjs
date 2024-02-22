import { Router } from "express";
import {
	query,
	validationResult,
	checkSchema,
	matchedData,
} from "express-validator";

import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
import { User } from "../mongoose/schemas/user.mjs";
import { createUserHandler, getUserByIdHandler } from "../handlers/users.mjs";
import { ReligionData } from "../mongoose/schemas/religion.mjs";
import { SubReligionData } from "../mongoose/schemas/subReligion.mjs";
import { CasteData } from "../mongoose/schemas/caste.mjs";
import { GeneralInfoData } from "../mongoose/schemas/generalInfo.mjs";

const router = Router();



router.post(
	"/api/users",
	checkSchema(createUserValidationSchema),
	createUserHandler
);


// router.get(
// 	"/api/users",
// 	query("filter")
// 		.isString()
// 		.notEmpty()
// 		.withMessage("Must not be empty")
// 		.isLength({ min: 3, max: 10 })
// 		.withMessage("Must be at least 3-10 characters"),
// 	(request, response) => {
// 		request.sessionStore.get(request.session.id, (err, sessionData) => {
// 			if (err) {
// 				throw err;
// 			}
// 		});
// 		const result = validationResult(request);
// 		const {
// 			query: { filter, value 
// 		} = request;
// 		if (filter && value)
// 			return response.send(
// 				mockUsers.filter((user) => user[filter].includes(value))
// 			);
// 		return response.send(mockUsers);
// 	}
// );

router.get("/api/users/:id", resolveIndexByUserId, getUserByIdHandler);


// router.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
// 	const { body, findUserIndex } = request;
// 	mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
// 	return response.sendStatus(200);
// });

// router.patch("/api/users/:id", resolveIndexByUserId, (request, response) => {
// 	const { body, findUserIndex } = request;
// 	mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
// 	return response.sendStatus(200);
// });

// router.delete("/api/users/:id", resolveIndexByUserId, (request, response) => {
// 	const { findUserIndex } = request;
// 	mockUsers.splice(findUserIndex, 1);
// 	return response.sendStatus(200);
// });

export default router;



//bulk InserT Example
// router.get("/api/bulkCreate", (req, res) => {
// 	// console.log("STATEE", City.getAllCities())
	
// 	CityData.insertMany(City.getAllCities().map(country => {
// 		return {city_name: country.name, stateCode: country.stateCode, countryCode: country.countryCode, latitude: country.latitude, longitude: country.longitude}
// 	})).then(function () {
// 		console.log("Data inserted") // Success 
// 	}).catch(function (error) {
// 		console.log("error", error)     // Failure 
// 	});

// });


// router.get("/api/bulkCreate", async (req, res) => {
		
//   for (let i = 0; i < SubReligionValuesBuddha.length; i++) {
//     const sub_religion = SubReligionValuesBuddha[i].toLowerCase().replace(/\s/g, "");
   
//     let data = await SubReligionData.find({ name: SubReligionValuesBuddha[i] }).exec();
  
//     import(`./constants.mjs`).then((module) => {
//     CasteData.insertMany(module[sub_religion].map(val => {
//       console.log(val, "data[0]", data[0])
//       return {name: val, sub_religion_id: data[0].id}
//     })).then(function () {
//       console.log("Data inserted") // Success 
//     }).catch(function (error) {
//       console.log("error", error)     // Failure 
//     });
//     });
//   }

// });
// const data = {
//   "moonsign": [
//       {
//           "label": "Does not matter",
//           "value": "Does not matter"
//       },
//       {
//           "label": "Mesh (Aries)",
//           "value": "Mesh (Aries)"
//       },
//       {
//           "label": "Vrishabh (Taurus)",
//           "value": "Vrishabh (Taurus)"
//       },
//       {
//           "label": "Mithun (Gemini)",
//           "value": "Mithun (Gemini)"
//       },
//       {
//           "label": "Karka (Cancer)",
//           "value": "Karka (Cancer)"
//       },
//       {
//           "label": "Simha (Leo)",
//           "value": "Simha (Leo)"
//       },
//       {
//           "label": "Kanya (Virgo)",
//           "value": "Kanya (Virgo)"
//       },
//       {
//           "label": "Tula (Libra)",
//           "value": "Tula (Libra)"
//       },
//       {
//           "label": "Vrischika (Scorpio)",
//           "value": "Vrischika (Scorpio)"
//       },
//       {
//           "label": "Dhanu (Sagittarious)",
//           "value": "Dhanu (Sagittarious)"
//       },
//       {
//           "label": "Makar (Capricorn)",
//           "value": "Makar (Capricorn)"
//       },
//       {
//           "label": "Kumbha (Aquarious)",
//           "value": "Kumbha (Aquarious)"
//       },
//       {
//           "label": "Meen (Pisces)",
//           "value": "Meen (Pisces)"
//       }
//   ],
//   "horosMatch": [
//       {
//           "label": "No",
//           "value": "No"
//       },
//       {
//           "label": "Yes",
//           "value": "Yes"
//       },
//       {
//           "label": "Not Applicable",
//           "value": "Not Applicable"
//       }
//   ],
//   "genderValues": [
//       {
//           "label": "Male",
//           "value": "Male"
//       },
//       {
//           "label": "Female",
//           "value": "Female"
//       }
//   ],
//   "maritalStatus": [
//       {
//           "label": "Unmarried",
//           "value": "Unmarried"
//       },
//       {
//           "label": "Widow/Widower",
//           "value": "Widow/Widower"
//       },
//       {
//           "label": "Divorcee",
//           "value": "Divorcee"
//       },
//       {
//           "label": "Separated",
//           "value": "Separated"
//       }
//   ],
//   "numberOfChildren": [
//       {
//           "label": "None",
//           "value": "None"
//       },
//       {
//           "label": "1",
//           "value": "1"
//       },
//       {
//           "label": "2",
//           "value": "2"
//       },
//       {
//           "label": "3",
//           "value": "3"
//       },
//       {
//           "label": "More than three",
//           "value": "More than three"
//       }
//   ],
//   "livingWithParentStatus": [
//       {
//           "label": "Living with me",
//           "value": "Living with me"
//       },
//       {
//           "label": "Not living with me",
//           "value": "Not living with me"
//       }
//   ],
//   "profileCreatedBy": [
//       {
//           "label": "Self",
//           "value": "Self"
//       },
//       {
//           "label": "Parents",
//           "value": "Parents"
//       },
//       {
//           "label": "Brother",
//           "value": "Brother"
//       },
//       {
//           "label": "Sister",
//           "value": "Sister"
//       },
//       {
//           "label": "Friend",
//           "value": "Friend"
//       },
//       {
//           "label": "Relative",
//           "value": "Relative"
//       }
//   ],
//   "height": [
//       {
//           "label": "Below 4ft",
//           "value": "Below 4ft"
//       },
//       {
//           "label": "4ft 6in",
//           "value": "4ft 6in"
//       },
//       {
//           "label": "4ft 7in",
//           "value": "4ft 7in"
//       },
//       {
//           "label": "4ft 8in",
//           "value": "4ft 8in"
//       },
//       {
//           "label": "4ft 9in",
//           "value": "4ft 9in"
//       },
//       {
//           "label": "4ft 10in",
//           "value": "4ft 10in"
//       },
//       {
//           "label": "4ft 11in",
//           "value": "4ft 11in"
//       },
//       {
//           "label": "5ft",
//           "value": "5ft"
//       },
//       {
//           "label": "5ft 1in",
//           "value": "5ft 1in"
//       },
//       {
//           "label": "5ft 2in",
//           "value": "5ft 2in"
//       },
//       {
//           "label": "5ft 3in",
//           "value": "5ft 3in"
//       },
//       {
//           "label": "5ft 4in",
//           "value": "5ft 4in"
//       },
//       {
//           "label": "5ft 5in",
//           "value": "5ft 5in"
//       },
//       {
//           "label": "5ft 6in",
//           "value": "5ft 6in"
//       },
//       {
//           "label": "5ft 7in",
//           "value": "5ft 7in"
//       },
//       {
//           "label": "5ft 8in",
//           "value": "5ft 8in"
//       },
//       {
//           "label": "5ft 9in",
//           "value": "5ft 9in"
//       },
//       {
//           "label": "5ft 10in",
//           "value": "5ft 10in"
//       },
//       {
//           "label": "5ft 11in",
//           "value": "5ft 11in"
//       },
//       {
//           "label": "6ft",
//           "value": "6ft"
//       },
//       {
//           "label": "6ft 1in",
//           "value": "6ft 1in"
//       },
//       {
//           "label": "6ft 2in",
//           "value": "6ft 2in"
//       },
//       {
//           "label": "6ft 3in",
//           "value": "6ft 3in"
//       },
//       {
//           "label": "6ft 4in",
//           "value": "6ft 4in"
//       },
//       {
//           "label": "6ft 5in",
//           "value": "6ft 5in"
//       },
//       {
//           "label": "6ft 6in",
//           "value": "6ft 6in"
//       },
//       {
//           "label": "6ft 7in",
//           "value": "6ft 7in"
//       },
//       {
//           "label": "6ft 8in",
//           "value": "6ft 8in"
//       },
//       {
//           "label": "6ft 9in",
//           "value": "6ft 9in"
//       },
//       {
//           "label": "6ft 10in",
//           "value": "6ft 10in"
//       },
//       {
//           "label": "6ft 11in",
//           "value": "6ft 11in"
//       },
//       {
//           "label": "7ft",
//           "value": "7ft"
//       },
//       {
//           "label": "Above 7ft",
//           "value": "Above 7ft"
//       },
//       {
//           "label": "Does not Matter",
//           "value": "Does not Matter"
//       }
//   ],
//   "weight": [
//       {
//           "label": "Less then 40",
//           "value": "Less then 40"
//       },
//       {
//           "label": "40 kg",
//           "value": "40 kg"
//       },
//       {
//           "label": "41 kg",
//           "value": "41 kg"
//       },
//       {
//           "label": "42 kg",
//           "value": "42 kg"
//       },
//       {
//           "label": "43 kg",
//           "value": "43 kg"
//       },
//       {
//           "label": "44 kg",
//           "value": "44 kg"
//       },
//       {
//           "label": "45 kg",
//           "value": "45 kg"
//       },
//       {
//           "label": "46 kg",
//           "value": "46 kg"
//       },
//       {
//           "label": "47 kg",
//           "value": "47 kg"
//       },
//       {
//           "label": "48 kg",
//           "value": "48 kg"
//       },
//       {
//           "label": "49 kg",
//           "value": "49 kg"
//       },
//       {
//           "label": "50 kg",
//           "value": "50 kg"
//       },
//       {
//           "label": "51 kg",
//           "value": "51 kg"
//       },
//       {
//           "label": "52 kg",
//           "value": "52 kg"
//       },
//       {
//           "label": "53 kg",
//           "value": "53 kg"
//       },
//       {
//           "label": "54 kg",
//           "value": "54 kg"
//       },
//       {
//           "label": "55 kg",
//           "value": "55 kg"
//       },
//       {
//           "label": "56 kg",
//           "value": "56 kg"
//       },
//       {
//           "label": "57 kg",
//           "value": "57 kg"
//       },
//       {
//           "label": "58 kg",
//           "value": "58 kg"
//       },
//       {
//           "label": "59 kg",
//           "value": "59 kg"
//       },
//       {
//           "label": "60 kg",
//           "value": "60 kg"
//       },
//       {
//           "label": "61 kg",
//           "value": "61 kg"
//       },
//       {
//           "label": "62 kg",
//           "value": "62 kg"
//       },
//       {
//           "label": "63 kg",
//           "value": "63 kg"
//       },
//       {
//           "label": "64 kg",
//           "value": "64 kg"
//       },
//       {
//           "label": "65 kg",
//           "value": "65 kg"
//       },
//       {
//           "label": "66 kg",
//           "value": "66 kg"
//       },
//       {
//           "label": "67 kg",
//           "value": "67 kg"
//       },
//       {
//           "label": "68 kg",
//           "value": "68 kg"
//       },
//       {
//           "label": "69 kg",
//           "value": "69 kg"
//       },
//       {
//           "label": "70 kg",
//           "value": "70 kg"
//       },
//       {
//           "label": "71 kg",
//           "value": "71 kg"
//       },
//       {
//           "label": "72 kg",
//           "value": "72 kg"
//       },
//       {
//           "label": "73 kg",
//           "value": "73 kg"
//       },
//       {
//           "label": "74 kg",
//           "value": "74 kg"
//       },
//       {
//           "label": "75 kg",
//           "value": "75 kg"
//       },
//       {
//           "label": "76 kg",
//           "value": "76 kg"
//       },
//       {
//           "label": "77 kg",
//           "value": "77 kg"
//       },
//       {
//           "label": "78 kg",
//           "value": "78 kg"
//       },
//       {
//           "label": "79 kg",
//           "value": "79 kg"
//       },
//       {
//           "label": "80 kg",
//           "value": "80 kg"
//       },
//       {
//           "label": "81 kg",
//           "value": "81 kg"
//       },
//       {
//           "label": "82 kg",
//           "value": "82 kg"
//       },
//       {
//           "label": "83 kg",
//           "value": "83 kg"
//       },
//       {
//           "label": "84 kg",
//           "value": "84 kg"
//       },
//       {
//           "label": "85 kg",
//           "value": "85 kg"
//       },
//       {
//           "label": "86 kg",
//           "value": "86 kg"
//       },
//       {
//           "label": "87 kg",
//           "value": "87 kg"
//       },
//       {
//           "label": "88 kg",
//           "value": "88 kg"
//       },
//       {
//           "label": "89 kg",
//           "value": "89 kg"
//       },
//       {
//           "label": "90 kg",
//           "value": "90 kg"
//       },
//       {
//           "label": "91 kg",
//           "value": "91 kg"
//       },
//       {
//           "label": "92 kg",
//           "value": "92 kg"
//       },
//       {
//           "label": "93 kg",
//           "value": "93 kg"
//       },
//       {
//           "label": "94 kg",
//           "value": "94 kg"
//       },
//       {
//           "label": "95 kg",
//           "value": "95 kg"
//       },
//       {
//           "label": "96 kg",
//           "value": "96 kg"
//       },
//       {
//           "label": "97 kg",
//           "value": "97 kg"
//       },
//       {
//           "label": "98 kg",
//           "value": "98 kg"
//       },
//       {
//           "label": "99 kg",
//           "value": "99 kg"
//       },
//       {
//           "label": "100 kg",
//           "value": "100 kg"
//       },
//       {
//           "label": "101 kg",
//           "value": "101 kg"
//       },
//       {
//           "label": "102 kg",
//           "value": "102 kg"
//       },
//       {
//           "label": "103 kg",
//           "value": "103 kg"
//       },
//       {
//           "label": "104 kg",
//           "value": "104 kg"
//       },
//       {
//           "label": "105 kg",
//           "value": "105 kg"
//       },
//       {
//           "label": "106 kg",
//           "value": "106 kg"
//       },
//       {
//           "label": "107 kg",
//           "value": "107 kg"
//       },
//       {
//           "label": "108 kg",
//           "value": "108 kg"
//       },
//       {
//           "label": "109 kg",
//           "value": "109 kg"
//       },
//       {
//           "label": "110 kg",
//           "value": "110 kg"
//       },
//       {
//           "label": "111 kg",
//           "value": "111 kg"
//       },
//       {
//           "label": "112 kg",
//           "value": "112 kg"
//       },
//       {
//           "label": "113 kg",
//           "value": "113 kg"
//       },
//       {
//           "label": "114 kg",
//           "value": "114 kg"
//       },
//       {
//           "label": "115 kg",
//           "value": "115 kg"
//       },
//       {
//           "label": "116 kg",
//           "value": "116 kg"
//       },
//       {
//           "label": "117 kg",
//           "value": "117 kg"
//       },
//       {
//           "label": "118 kg",
//           "value": "118 kg"
//       },
//       {
//           "label": "119 kg",
//           "value": "119 kg"
//       },
//       {
//           "label": "120 kg",
//           "value": "120 kg"
//       },
//       {
//           "label": "121 kg",
//           "value": "121 kg"
//       },
//       {
//           "label": "122 kg",
//           "value": "122 kg"
//       },
//       {
//           "label": "123 kg",
//           "value": "123 kg"
//       },
//       {
//           "label": "124 kg",
//           "value": "124 kg"
//       },
//       {
//           "label": "125 kg",
//           "value": "125 kg"
//       },
//       {
//           "label": "126 kg",
//           "value": "126 kg"
//       },
//       {
//           "label": "127 kg",
//           "value": "127 kg"
//       },
//       {
//           "label": "128 kg",
//           "value": "128 kg"
//       },
//       {
//           "label": "129 kg",
//           "value": "129 kg"
//       },
//       {
//           "label": "139 kg",
//           "value": "139 kg"
//       },
//       {
//           "label": "132 kg",
//           "value": "132 kg"
//       },
//       {
//           "label": "131 kg",
//           "value": "131 kg"
//       },
//       {
//           "label": "133 kg",
//           "value": "133 kg"
//       },
//       {
//           "label": "134 kg",
//           "value": "134 kg"
//       },
//       {
//           "label": "135 kg",
//           "value": "135 kg"
//       },
//       {
//           "label": "136 kg",
//           "value": "136 kg"
//       },
//       {
//           "label": "137 kg",
//           "value": "137 kg"
//       },
//       {
//           "label": "138 kg",
//           "value": "138 kg"
//       },
//       {
//           "label": "139 kg",
//           "value": "139 kg"
//       },
//       {
//           "label": "140 kg",
//           "value": "140 kg"
//       },
//       {
//           "label": "More than 140 kg",
//           "value": "More than 140 kg"
//       }
//   ],
//   "bloodGroup": [
//       {
//           "label": "A+",
//           "value": "A+"
//       },
//       {
//           "label": "A-",
//           "value": "A-"
//       },
//       {
//           "label": "AB+",
//           "value": "AB+"
//       },
//       {
//           "label": "AB-",
//           "value": "AB-"
//       },
//       {
//           "label": "B+",
//           "value": "B+"
//       },
//       {
//           "label": "B-",
//           "value": "B-"
//       },
//       {
//           "label": "O+",
//           "value": "O+"
//       },
//       {
//           "label": "O-",
//           "value": "O-"
//       }
//   ],
//   "complexion": [
//       {
//           "label": "Very Fair",
//           "value": "Very Fair"
//       },
//       {
//           "label": "Fair",
//           "value": "Fair"
//       },
//       {
//           "label": "Wheatish",
//           "value": "Wheatish"
//       },
//       {
//           "label": "Wheatish Medium",
//           "value": "Wheatish Medium"
//       },
//       {
//           "label": "Wheatish Brown",
//           "value": "Wheatish Brown"
//       },
//       {
//           "label": "Dark",
//           "value": "Dark"
//       }
//   ],
//   "physicalStatus": [
//       {
//           "label": "Normal",
//           "value": "Normal"
//       },
//       {
//           "label": "Physically challenged",
//           "value": "Physically challenged"
//       }
//   ],
//   "PhysicalStatusDetails": [
//       {
//           "label": "Physically challenged from birth",
//           "value": "Physically challenged from birth"
//       },
//       {
//           "label": "Physically challenged due to accident",
//           "value": "Physically challenged due to accident"
//       },
//       {
//           "label": "Mentally challenged from birth",
//           "value": "Mentally challenged from birth"
//       },
//       {
//           "label": "Mentally challenged due to accident",
//           "value": "Mentally challenged due to accident"
//       },
//       {
//           "label": "Physical abnormality affecting only looks",
//           "value": "Physical abnormality affecting only looks"
//       },
//       {
//           "label": "Physical abnormality affecting bodily functions",
//           "value": "Physical abnormality affecting bodily functions"
//       },
//       {
//           "label": "Physically and mentally challenged",
//           "value": "Physically and mentally challenged"
//       }
//   ],
//   "bodyType": [
//       {
//           "label": "Slim",
//           "value": "Slim"
//       },
//       {
//           "label": "Average",
//           "value": "Average"
//       },
//       {
//           "label": "Athletic",
//           "value": "Athletic"
//       },
//       {
//           "label": "Heavy",
//           "value": "Heavy"
//       }
//   ],
//   "diet_type": [
//       {
//           "label": "Veg",
//           "value": "Veg"
//       },
//       {
//           "label": "Eggetarian",
//           "value": "Eggetarian"
//       },
//       {
//           "label": "Occasionally Non-Veg",
//           "value": "Occasionally Non-Veg"
//       },
//       {
//           "label": "Non-Veg",
//           "value": "Non-Veg"
//       },
//       {
//           "label": "Jain",
//           "value": "Jain"
//       },
//       {
//           "label": "Vegan",
//           "value": "Vegan"
//       }
//   ],
//   "yes_or_no": [
//       {
//           "label": "Yes",
//           "value": "Yes"
//       },
//       {
//           "label": "No",
//           "value": "No"
//       }
//   ],
//   "income": [
//       {
//           "label": "No Income",
//           "value": "No Income"
//       },
//       {
//           "label": "Rs. 0 - 1 Lakh",
//           "value": "Rs. 0 - 1 Lakh"
//       },
//       {
//           "label": "Rs. 1 - 2 Lakh",
//           "value": "Rs. 1 - 2 Lakh"
//       },
//       {
//           "label": "Rs. 2 - 3 Lakh",
//           "value": "Rs. 2 - 3 Lakh"
//       },
//       {
//           "label": "Rs. 3 - 4 Lakh",
//           "value": "Rs. 3 - 4 Lakh"
//       },
//       {
//           "label": "Rs. 4 - 5 Lakh",
//           "value": "Rs. 4 - 5 Lakh"
//       },
//       {
//           "label": "Rs. 5 - 7.5 Lakh",
//           "value": "Rs. 5 - 7.5 Lakh"
//       },
//       {
//           "label": "Rs. 7.5 - 10 Lakh",
//           "value": "Rs. 7.5 - 10 Lakh"
//       },
//       {
//           "label": "Rs. 10 - 15 Lakh",
//           "value": "Rs. 10 - 15 Lakh"
//       },
//       {
//           "label": "Rs. 15 - 20 Lakh",
//           "value": "Rs. 15 - 20 Lakh"
//       },
//       {
//           "label": "Rs. 20 - 25 Lakh",
//           "value": "Rs. 20 - 25 Lakh"
//       },
//       {
//           "label": "Rs. 25 - 35 Lakh",
//           "value": "Rs. 25 - 35 Lakh"
//       },
//       {
//           "label": "Rs. 35 - 50 Lakh",
//           "value": "Rs. 35 - 50 Lakh"
//       },
//       {
//           "label": "Rs. 50 - 70 Lakh",
//           "value": "Rs. 50 - 70 Lakh"
//       },
//       {
//           "label": "Rs. 70 Lakh - 1 crore",
//           "value": "Rs. 70 Lakh - 1 crore"
//       },
//       {
//           "label": "Rs. 1 crore & above",
//           "value": "Rs. 1 crore & above"
//       }
//   ],
//   "education": [
//       {
//           "label": "Engineering/Design",
//           "value": "Engineering/Design"
//       },
//       {
//           "label": "B.Arch",
//           "value": "B.Arch"
//       },
//       {
//           "label": "B.Des",
//           "value": "B.Des"
//       },
//       {
//           "label": "B.E/B.Tech",
//           "value": "B.E/B.Tech"
//       },
//       {
//           "label": "B.Pharma",
//           "value": "B.Pharma"
//       },
//       {
//           "label": "M.Arch",
//           "value": "M.Arch"
//       },
//       {
//           "label": "M.Des",
//           "value": "M.Des"
//       },
//       {
//           "label": "M.E/M.Tech",
//           "value": "M.E/M.Tech"
//       },
//       {
//           "label": "M.Pharma",
//           "value": "M.Pharma"
//       },
//       {
//           "label": "M.S. (Engineering)",
//           "value": "M.S. (Engineering)"
//       },
//       {
//           "label": "Computers",
//           "value": "Computers"
//       },
//       {
//           "label": "B.IT",
//           "value": "B.IT"
//       },
//       {
//           "label": "BCA",
//           "value": "BCA"
//       },
//       {
//           "label": "MCA/PGDCA",
//           "value": "MCA/PGDCA"
//       },
//       {
//           "label": "Finance/Commerce",
//           "value": "Finance/Commerce"
//       },
//       {
//           "label": "B.Com",
//           "value": "B.Com"
//       },
//       {
//           "label": "CA",
//           "value": "CA"
//       },
//       {
//           "label": "CFA",
//           "value": "CFA"
//       },
//       {
//           "label": "CS",
//           "value": "CS"
//       },
//       {
//           "label": "ICWA",
//           "value": "ICWA"
//       },
//       {
//           "label": "M.Com",
//           "value": "M.Com"
//       },
//       {
//           "label": "Management",
//           "value": "Management"
//       },
//       {
//           "label": "BBA",
//           "value": "BBA"
//       },
//       {
//           "label": "BHM",
//           "value": "BHM"
//       },
//       {
//           "label": "MBA/PGDM",
//           "value": "MBA/PGDM"
//       },
//       {
//           "label": "Medicine",
//           "value": "Medicine"
//       },
//       {
//           "label": "BAMS",
//           "value": "BAMS"
//       },
//       {
//           "label": "BDS",
//           "value": "BDS"
//       },
//       {
//           "label": "BHMS",
//           "value": "BHMS"
//       },
//       {
//           "label": "BPT",
//           "value": "BPT"
//       },
//       {
//           "label": "BVSc.",
//           "value": "BVSc."
//       },
//       {
//           "label": "DM",
//           "value": "DM"
//       },
//       {
//           "label": "M.D.",
//           "value": "M.D."
//       },
//       {
//           "label": "M.S. (Medicine)",
//           "value": "M.S. (Medicine)"
//       },
//       {
//           "label": "MBBS",
//           "value": "MBBS"
//       },
//       {
//           "label": "MCh",
//           "value": "MCh"
//       },
//       {
//           "label": "MDS",
//           "value": "MDS"
//       },
//       {
//           "label": "MPT",
//           "value": "MPT"
//       },
//       {
//           "label": "MVSc.",
//           "value": "MVSc."
//       },
//       {
//           "label": "Law",
//           "value": "Law"
//       },
//       {
//           "label": "BL/LLB",
//           "value": "BL/LLB"
//       },
//       {
//           "label": "ML/LLM",
//           "value": "ML/LLM"
//       },
//       {
//           "label": "Arts/Science",
//           "value": "Arts/Science"
//       },
//       {
//           "label": "B.A",
//           "value": "B.A"
//       },
//       {
//           "label": "B.Ed",
//           "value": "B.Ed"
//       },
//       {
//           "label": "B.Sc",
//           "value": "B.Sc"
//       },
//       {
//           "label": "BFA",
//           "value": "BFA"
//       },
//       {
//           "label": "BJMC",
//           "value": "BJMC"
//       },
//       {
//           "label": "M.A",
//           "value": "M.A"
//       },
//       {
//           "label": "M.Ed",
//           "value": "M.Ed"
//       },
//       {
//           "label": "M.Sc",
//           "value": "M.Sc"
//       },
//       {
//           "label": "MFA",
//           "value": "MFA"
//       },
//       {
//           "label": "MJMC",
//           "value": "MJMC"
//       },
//       {
//           "label": "MSW",
//           "value": "MSW"
//       },
//       {
//           "label": "Doctorate",
//           "value": "Doctorate"
//       },
//       {
//           "label": "M.Phil",
//           "value": "M.Phil"
//       },
//       {
//           "label": "Ph. D",
//           "value": "Ph. D"
//       },
//       {
//           "label": "Non-Graduate",
//           "value": "Non-Graduate"
//       },
//       {
//           "label": "High School",
//           "value": "High School"
//       },
//       {
//           "label": "Trade School",
//           "value": "Trade School"
//       },
//       {
//           "label": "Diploma",
//           "value": "Diploma"
//       }
//   ],
//   "employer": [
//       {
//           "label": "Private Sector",
//           "value": "Private Sector"
//       },
//       {
//           "label": "Government/Public Sector",
//           "value": "Government/Public Sector"
//       },
//       {
//           "label": "Civil Services",
//           "value": "Civil Services"
//       },
//       {
//           "label": "Defense",
//           "value": "Defense"
//       },
//       {
//           "label": "Business/ Self Employed",
//           "value": "Business/ Self Employed"
//       },
//       {
//           "label": "Not Working",
//           "value": "Not Working"
//       }
//   ],
//   "yes_or_no_abroad": [
//       {
//           "label": "No",
//           "value": "No"
//       },
//       {
//           "label": "Yes",
//           "value": "Yes"
//       },
//       {
//           "label": "Not Decided",
//           "value": "Not Decided"
//       }
//   ],
//   "mothers_occupation": [
//       {
//           "label": "Housewife",
//           "value": "Housewife"
//       },
//       {
//           "label": "Business/Entrepreneur",
//           "value": "Business/Entrepreneur"
//       },
//       {
//           "label": "Service-Private",
//           "value": "Service-Private"
//       },
//       {
//           "label": "Service-Govt/PSU",
//           "value": "Service-Govt/PSU"
//       },
//       {
//           "label": "Army/Armed forces",
//           "value": "Army/Armed forces"
//       },
//       {
//           "label": "Civil Services",
//           "value": "Civil Services"
//       },
//       {
//           "label": "Teacher",
//           "value": "Teacher"
//       },
//       {
//           "label": "Retired",
//           "value": "Retired"
//       },
//       {
//           "label": "Expired",
//           "value": "Expired"
//       }
//   ],
//   "fathers_occupation": [
//       {
//           "label": "Select",
//           "value": "Select"
//       },
//       {
//           "label": "Business/Entrepreneur",
//           "value": "Business/Entrepreneur"
//       },
//       {
//           "label": "Service - Private",
//           "value": "Service - Private"
//       },
//       {
//           "label": "Service - Govt./PSU",
//           "value": "Service - Govt./PSU"
//       },
//       {
//           "label": "Army/Armed Forces",
//           "value": "Army/Armed Forces"
//       },
//       {
//           "label": "Civil Services",
//           "value": "Civil Services"
//       },
//       {
//           "label": "Retired",
//           "value": "Retired"
//       },
//       {
//           "label": "Not Employed",
//           "value": "Not Employed"
//       },
//       {
//           "label": "Expired",
//           "value": "Expired"
//       }
//   ],
//   "sisters_or_brothers": [
//       {
//           "label": "None",
//           "value": "None"
//       },
//       {
//           "label": "1",
//           "value": "1"
//       },
//       {
//           "label": "2",
//           "value": "2"
//       },
//       {
//           "label": "3",
//           "value": "3"
//       },
//       {
//           "label": "3+",
//           "value": "3+"
//       }
//   ],
//   "family_status": [
//       {
//           "label": "Rich/Affluent",
//           "value": "Rich/Affluent"
//       },
//       {
//           "label": "Upper Middle",
//           "value": "Upper Middle"
//       },
//       {
//           "label": "Middle Class",
//           "value": "Middle Class"
//       }
//   ],
//   "family_values": [
//       {
//           "label": "Joint Family",
//           "value": "Joint Family"
//       },
//       {
//           "label": "Nuclear Family",
//           "value": "Nuclear Family"
//       }
//   ]
// }

// //bulk InserT Example
// router.get("/api/bulkCreate/", (req, res) => {
// 	// console.log("STATEE", City.getAllCities())
	

//   GeneralInfoData.insertMany(data)
//   .then((docs) => {
//     console.log('Documents inserted:', docs.length);
//   })
//   .catch((err) => {
//     console.error('Error inserting documents:', err);
//   });
// 	// GeneralInfoData.insertMany(City.getAllCities().map(country => {
// 	// 	return {city_name: country.name, stateCode: country.stateCode, countryCode: country.countryCode, latitude: country.latitude, longitude: country.longitude}
// 	// })).then(function () {
// 	// 	console.log("Data inserted") // Success 
// 	// }).catch(function (error) {
// 	// 	console.log("error", error)     // Failure 
// 	// });

// });
