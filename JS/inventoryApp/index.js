const express = require('express');
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/product')
const method_override = require('method-override');
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(method_override('_method'))

mongoose.connect("mongodb://localhost:27017/inventory")
    .then(() => {
        console.log("connection open");

    })
    .catch((err) => {
        console.log("Erorr")
        console.log(err);
    })


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('home', { products })
})
const categories = ['fruit', 'vegetable', 'dairy', 'bakery']
app.get('/products/new', (req, res) => {
    res.render('new', { categories })
})
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
    // console.log(newProduct)
})

app.get('/products/:id', async (req, res) => {
   try {
       const { id } = req.params
       const product = await Product.findById(id)
       res.render('view', { product })
   } catch (error) {
    next(new AppError("suiiii"))
   }

})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    console.log(product);
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res, next) => {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    console.log(deletedProduct);
    res.redirect('/products')
})

app.listen(3000, () => {
    console.log("App started listening on port 3000");
})

app.use((req, res) => {
    res.status(404).send("Page not found ")
})
app.use((err,req, res,next) => {
    res.status(404).send("Page not found ")
})