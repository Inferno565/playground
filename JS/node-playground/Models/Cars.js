import mongoose from "mongoose"

const carsSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Negative price not valid"]
    },
    inStock: {
        type: Boolean,
        default: false,
    },
    stock: {
        type: Number,
        default: 0
    }

})


const cars = mongoose.model("cars", carsSchema)
export default cars
