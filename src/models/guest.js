import mongoose, { Schema } from "mongoose";

const guestSchema = Schema({
  name: { type: String, required: true },
  dni: { type: Number, required: true },
  phone: { type: Number, required: true },
});

export const Guest = mongoose.model("Guest", guestSchema);
