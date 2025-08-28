import cars from "./Models/Cars.js"
import AppError from "./ErrorHandler.js";

const testMiddleware = (req, res, next) => {
    console.log("This is a test middleware");
    next()
}

export default function (app) {

    app.get('/', testMiddleware, async (req, res) => {
        try {
            const datas = await cars.find({})
            res.render('home.ejs', { datas })
        } catch (error) {
            console.log(error);

        }
    })

    app.get("/details/:id", async (req, res, next) => {
        const { id } = req.params
        const detail = await cars.findById(id)
        if (!detail) {
            throw new AppError("Car not found", 404)
        }
        res.render('details.ejs', { detail })
    })

    //used get because didnt wanna override anchor tag
    app.get("/delete/:id", async (req, res) => {
        const { id } = req.params
        const deleted = await cars.findByIdAndDelete(id)
        console.log(deleted);
        res.redirect('/')
    })

    app.get("/new", (req, res) => {
        res.render('new.ejs')
    })

    app.put("/add", async (req, res) => {
        const newData = req.body
        const addedData = await cars.create(newData)
        console.log(addedData);
        res.redirect('/')
    })

    app.get("/error", async (req, res) => {
        throw new Error("This is async error");

        //    res.send("This is async error ")
    })
}