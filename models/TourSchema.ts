import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);