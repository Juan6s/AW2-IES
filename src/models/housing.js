import mongoose, { Schema } from "mongoose";

const housingSchema = Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  pricing: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  enabled: { type: Boolean, required: true },
});

export const Housing = mongoose.model("Housing", housingSchema);
