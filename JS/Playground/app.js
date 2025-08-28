import { connectDb } from "./Config/Database.js";
import dotenv from "dotenv"
import express, { urlencoded } from "express";
import carRoutes from "./routes.js"
import methodOverride from "method-override"
dotenv.config({ quiet: true })

const app = express()
const PORT = process.env.Port

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))


connectDb()
carRoutes(app)

// app.use((err, req, res, next) => {
//     const { message, statusCode } = err
//     res.send(message)
// })

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);

})
