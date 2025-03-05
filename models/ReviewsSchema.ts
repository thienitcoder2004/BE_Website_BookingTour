import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    userName: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);