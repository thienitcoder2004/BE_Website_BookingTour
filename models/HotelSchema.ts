import mongoose, { Schema, Document } from "mongoose";

export interface IHotel extends Document {
  name: string;
  type: string;
  image: string;
  city: string;
  distance: string;
  description: string;
  rating?: number;
  rooms: string[];
  cheapestPrice: number;
  features: string[];
}

const HotelSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  distance: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  rooms: { type: [String], required: true },
  cheapestPrice: { type: Number, required: true },
  features: { type: [String], required: true },
});

export default mongoose.model<IHotel>("Hotel", HotelSchema);
