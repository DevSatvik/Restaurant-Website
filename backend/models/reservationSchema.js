import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain atleast 3 characters!"],
        maxLength: [25, "First Name can't exceed 25 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain atleast 3 characters!"],
        maxLength: [25, "Last Name can't exceed 25 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid Email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must contain only 10 digits!"],
        maxLength: [10, "Phone Number must contain only 10 digits!"],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
})

export const Reservation = mongoose.model("Reservation", reservationSchema);