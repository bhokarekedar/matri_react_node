import { GeneralInfoData } from "../mongoose/schemas/generalInfo.mjs";



export const getAllGeneralInfo = async (request, response) => {
    try {
        const data = await GeneralInfoData.find({});
        return response.json(data);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
};