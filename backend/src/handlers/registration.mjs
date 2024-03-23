import mongoose from "mongoose";
import { ReligionData } from "../mongoose/schemas/religion.mjs";
import { SubReligionData } from "../mongoose/schemas/subReligion.mjs";
import { CasteData } from "../mongoose/schemas/caste.mjs";
import { User } from "../mongoose/schemas/user.mjs";
import { Profile } from "../mongoose/schemas/profile.mjs";
import { UsersPersonalInfo } from "../mongoose/schemas/usersPersonalInfo.mjs";
import { UsersContactInfo } from "../mongoose/schemas/usersContactInfo.mjs";
import { UsersEducationAndWorkInfo } from "../mongoose/schemas/usersEducationAndWorkInfo.mjs";
import { UsersRelegionInfo } from "../mongoose/schemas/usersRelegionInfo.mjs";
import { UsersFamilyInfo } from "../mongoose/schemas/usersFamilyInfo.mjs";
import { UsersDietInfo } from "../mongoose/schemas/usersDietInfo.mjs";
import { UsersHorrorscopeInfo } from "../mongoose/schemas/usersHorrorscopeInfo.mjs";
import { UsersIdealPartnerInfo } from "../mongoose/schemas/usersIdealPartnerInfo.mjs";

// const ObjectId =new mongoose.Types.ObjectId();
export const getAllRelegions = async (request, response) => {
  try {
    const data = await ReligionData.find({});
    let newArr = data.map((item) => {
      let arr = {
        label: item.name,
        value: item._id,
      };
      return arr;
    });
    return response.json(newArr);
  } catch (err) {
    console.error(err);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};

export const getRelatedSubRelegions = async (request, response) => {
  try {
    const data = await SubReligionData.find({
      religion_id: request.body.relegion_id,
    });
    let newArr = [];
    newArr = data?.map((item) => {
      let arr = {
        label: item.name,
        value: item._id,
      };
      return arr;
    });

    return response.json(newArr);
  } catch (err) {
    console.error(err);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCasteData = async (request, response) => {
  try {
    const data = await CasteData.find({
      sub_religion_id: request.body.sub_religion_id,
    });
    let newArr = [];
    newArr = data?.map((item) => {
      let arr = {
        label: item.name,
        value: item._id,
      };
      return arr;
    });

    return response.json(newArr);
  } catch (err) {
    console.error(err);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      profile_for,
      first_name,
      middle_name,
      last_name,
      gender,
      marital_status,
      mother_tongue,
      date_of_birth,
      height,
      weight,
      eye_color,
      hair_color,
      skin_color,
      use_specs_or_contact_lenses,
      special_condition,
      special_condition_details,
      contact_email,
      mobile_number,
      home_phone,
      current_location,
      parent_location,
      education,
      education_details,
      school_college_university,
      profession,
      profession_details,
      annual_income,
      present_status,
      you_work_with,
      designation,
      religion,
      sub_religion,
      caste,
      other_caste,
    } = req.body;
    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    // Create a new profile for the user
    const profile = new Profile({
      profile_for,
      first_name,
      middle_name,
      last_name,
      gender,
      marital_status,
      mother_tongue,
      date_of_birth,
      user_id: user._id,
    });
    await profile.save();

    // Create personal info, contact info, education and work info, religion info for the user
    const personalInfo = new UsersPersonalInfo({
      height,
      weight,
      eye_color,
      hair_color,
      skin_color,
      use_specs_or_contact_lenses,
      special_condition,
      special_condition_details,
      profile_id: profile._id,
    });
    await personalInfo.save();

    const contactInfo = new UsersContactInfo({
      contact_email,
      mobile_number,
      home_phone,
      current_location,
      parent_location,
      profile_id: profile._id,
    });
    await contactInfo.save();

    const educationAndWorkInfo = new UsersEducationAndWorkInfo({
      education,
      education_details,
      school_college_university,
      profession,
      profession_details,
      annual_income,
      present_status,
      you_work_with,
      designation,
      profile_id: profile._id,
    });
    await educationAndWorkInfo.save();

    const religionInfo = new UsersRelegionInfo({
      religion,
      sub_religion,
      caste,
      other_caste,
      profile_id: profile._id,
    });
    await religionInfo.save();

    res.status(201).send({
      user,
      profile,
      personalInfo,
      contactInfo,
      educationAndWorkInfo,
      religionInfo,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getFilteredUsers = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $project: {
          password: 0,
        },
      },
      {
        $lookup: {
          from: "profiles",
          localField: "_id",
          foreignField: "user_id",
          as: "profiles",
        },
      },
      {
        $lookup: {
          from: "userscontactinfos",
          localField: "profiles._id",
          foreignField: "profile_id",
          as: "contact_info",
        },
      },
      {
        $lookup: {
          from: "usersfamilyinfos",
          localField: "profiles._id",
          foreignField: "profile_id",
          as: "family_info",
        },
      },
    ]);

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateFamilyInfo = async (req, res) => {
  try {
    let fileds = [
      "profile_id",
      "family_type",
      "mother",
      "father",
      "brother",
      "sister",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersFamilyInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateContactInfo = async (req, res) => {
  try {
    let fileds = [
      "contact_email",
      "mobile_number",
      "home_phone",
      "current_location",
      "parent_location",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersContactInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateDietInfo = async (req, res) => {
  try {
    let fileds = [
      "daily_diet",
      "food_preference",
      "smoking",
      "drinking",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersDietInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateEducationAndWorkInfo = async (req, res) => {
  try {
    let fileds = [
      "education",
      "education_details",
      "school_college_university",
      "profession",
      "profession_details",
      "annual_income",
      "present_status",
      "you_work_with",
      "designation",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersEducationAndWorkInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateHorrorscopeInfo = async (req, res) => {
  try {
    let fileds = [
      "birth_date",
      "birth_Time",
      "birth_place",
      "nakshtra",
      "gaan",
      "nadi",
      "raas",
      "sun_sign",
      "gotra",
      "requiredToMatch",
      "mangal",
      "charan",
      "moon_sign",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersHorrorscopeInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateIdealPartnerInfo = async (req, res) => {
  try {
    let fileds = [
      "preferred_age_range",
      "preferred_height_range",
      "preferred_build",
      "preferred_marital_status",
      "preferred_family_type",
      "preferred_city_living_in",
      "preferred_working_partner",
      "preferred_education",
      "preferred_minimum_income_per_Annum",
      "preferred_looking_for",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersIdealPartnerInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePersonalInfo = async (req, res) => {
  try {
    let fileds = [
      "height",
      "weight",
      "eye_color",
      "hair_color",
      "skin_color",
      "use_specs_or_contact_lenses",
      "special_condition",
      "special_condition_details",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersPersonalInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUsersRelegionInfo = async (req, res) => {
  try {
    let fileds = [
      "religion",
      "sub_religion",
      "caste",
      "other_caste",
    ];
    let fieldsToUpdate = [];
    fileds.map((field, index) => {
      if (req.body.hasOwnProperty(field)) {
        fieldsToUpdate.push(field);
      }
    });
    let data = {}
    fieldsToUpdate.map((fieldToUpdate, index) => {
      data[fieldToUpdate] = req.body[fieldToUpdate]
    })
    if(data?.profile_id){
      const filter = { profile_id: data.profile_id };
      let doc = await UsersRelegionInfo.findOneAndUpdate(filter, data, { upsert: true, new: true });
      res.status(200).json(doc);
    }
    else{
      return res.status(400).json({ message: "No match found for the provided query." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
