import mongoose from "mongoose";

const UsersHorrorscopeInfoSchema = new mongoose.Schema(
  {
    birth_date: {
      type: mongoose.Schema.Types.String,
      
    },
    birth_Time: {
      type: mongoose.Schema.Types.String,
      
    },
    birth_place: {
      type: mongoose.Schema.Types.String,
      
    },
    nakshtra: {
      type: mongoose.Schema.Types.String,
      
    },
    gaan: {
      type: mongoose.Schema.Types.String,
      
    },
    nadi: {
      type: mongoose.Schema.Types.String,
      
    },
    raas: {
      type: mongoose.Schema.Types.String,
      
    },
    sun_sign: {
      type: mongoose.Schema.Types.String,
      
    },
    gotra: {
      type: mongoose.Schema.Types.String,
      
    },
    requiredToMatch: {
      type: mongoose.Schema.Types.Boolean,
    },
    mangal: {
      type: mongoose.Schema.Types.String,
      
    },
    charan: {
      type: mongoose.Schema.Types.String,
      
    },
    moon_sign: {
      type: mongoose.Schema.Types.String,
      
    },
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

export const UsersHorrorscopeInfo = mongoose.model("UsersHorrorscopeInfo", UsersHorrorscopeInfoSchema);
