class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (error, request, response, next)=>{
    error.message = error.message || "Internal Server Error!";
    error.statusCode = error.statusCode || 500;

    return response.status(error.statusCode).json({
        success: false,
        message: error.message,
    });
};

export default ErrorHandler