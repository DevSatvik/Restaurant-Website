import { response } from "express";
import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async(request, response, next) => {
    
    const {firstName, lastName, email, phone, time, date} = request.body;
    if (!firstName || !lastName || !email || !phone || !time || !date ) {
        return next(new ErrorHandler("Please Fill out the Compelete Form!", 400));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, time, date});
        response.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!"
        });
    } catch(error) {
        if(error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(" , "), 400));
        }
        return next(error)
    }
};