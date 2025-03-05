import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/booking_tour");
        console.log("MongoDB connected:", connection.connection.host);
        return connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
