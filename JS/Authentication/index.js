const express = require('express');
// const mongoose = require('mongoose');


const app = express()

app.set('view engine', 'ejs')

app.get("/login", (req, res) => {
    res.send("Suiiii")
})



app.listen(5000, () => {
    console.log("Server started listening on port 5000");
})
