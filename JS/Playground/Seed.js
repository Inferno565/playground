import mongoose from "mongoose";
import cars from "./Models/Cars.js"
import dotenv from "dotenv"
dotenv.config()

try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connection established with ${connection.host}`);

} catch (error) {
    console.log(error);
}

const seedCars = [
    {
        manufacturer: "Bugatti",
        model: "Chiron Super Sport",
        price: 3900000,
        inStock: true,
        stock: 2,
    },
    {
        manufacturer: "Koenigsegg",
        model: "Jesko Absolut",
        price: 3400000,
        inStock: true,
        stock: 1,
    },
    {
        manufacturer: "Pagani",
        model: "Huayra Roadster BC",
        price: 3500000,
        inStock: false,
        stock: 0,
    },
    {
        manufacturer: "McLaren",
        model: "Speedtail",
        price: 2300000,
        inStock: true,
        stock: 3,
    },
    {
        manufacturer: "Lamborghini",
        model: "Sián FKP 37",
        price: 3200000,
        inStock: false,
        stock: 0,
    }
]

try {
    const inserted = await cars.insertMany(seedCars);
    console.log("Seeded cars:", inserted);
    process.exit(); // optional: close process
} catch (error) {
    console.log("Seeding failed:", error);
}