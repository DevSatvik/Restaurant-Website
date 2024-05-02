import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant_Reservation"
    }).then(()=>{
        console.log(`Connected to the database SUCCESSFULLY!`);
    }).catch((error)=>{
        console.log(`ERROR! Couldn't connect to the Database. ${error}`)
    })
};