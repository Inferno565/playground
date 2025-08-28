class AppError extends Error {
    constructor(message, statusCode) {
        super()
        this.message = message
        this.status = statusCode
    }
}

export default AppError