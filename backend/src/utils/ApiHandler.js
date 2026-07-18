class ApiResponse {
    constructor(statusCode, data = null, message = "Success") {
        this.success = true;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong") {
        super(message);

        this.success = false;
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export { ApiResponse, ApiError };