import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\nMongoDB connected !!`);
    } catch (error) {
        console.log("MONGODB connection error ", error)
        process.exit(1)
    }
}