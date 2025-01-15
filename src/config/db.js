
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected");

    }
    catch (err) {
        console.error("Error occurs", err.message);
    }
}

export default connectDB;