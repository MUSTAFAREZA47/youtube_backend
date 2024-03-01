import dotenv from "dotenv"
import mongoose from "mongoose"
import { connectDB } from "./db/index.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`MongoDB connection sucessful at PORT`)
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed !!!", err)
})
























// import express from "express"
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}/`)

//         app.on("error", (error) => {
//             console.log("Error: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR ", error)
//         throw error
//     }
// })()