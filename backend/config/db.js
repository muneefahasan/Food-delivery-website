import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://muneefahasan_db_user:20021225sarah@cluster0.djwuqd.mongodb.net/FoodieFrenzy"
        );
        console.log("DB CONNECTED");
    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1);
    }
};
