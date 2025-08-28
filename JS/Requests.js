const API_URL = "https://swapi.info/api/planets/1"


// const req = new XMLHttpRequest()
// req.onload = function () {
//     console.log("Your Joke is here");
//     const data = JSON.parse(this.responseText)
//     console.log(data);

// }
// req.onerror = function () {
//     console.log("Error");
//     console.log(this);

// }
// req.open("GET", API_URL)
// req.send()

fetch(API_URL).then(res => {
    console.log(res);
    console.log("Resolved");
    res.json().then(data => {
        console.log("your data is");
        console.log(data);

    })

}).catch(err => {
    console.log(err);
    console.log("Error");


})

console.log("Hiii");

