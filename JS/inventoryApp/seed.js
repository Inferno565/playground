const Product = require('./models/product')
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/inventory")
    .then(() => {
        console.log("connection open");

    })
    .catch((err) => {
        console.log("Erorr")
        console.log(err);
    })

// const p = new Product({
//     name: 'Strawberry',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// })
//     .catch((err) => {
//         console.log(err);
//     })
    
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })