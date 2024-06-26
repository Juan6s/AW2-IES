import mongosee, { Schema, ObjectId } from "mongoose";

const BookingSchema = new Schema({
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: false,
  },
  housing: { type: ObjectId, required: true, ref: "Housing" },
  guest: { type: ObjectId, required: true, ref: "Guest" },
});

export const Booking = mongosee.model("Booking", BookingSchema);
