// const names = ['Pagani', 'Ferrari', 'Audi', 'Acura']

// const myForEach = (array, cb) => {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         cb(element)
//     }
// }

// myForEach(names, (element) => {
//     const upperCased = element.toUpperCase()
//     console.log(upperCased);
// })

// const loadPekeom = (id) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(console.log("Your data is here")
//         )
//         .then(console.log(res)
//         )
// }
// loadPekeom(65)

setTimeout(() => {
    console.log("2222");

}, 3000);

const p = new Promise((resolve, reject) => {
    setTimeout((result) => {
        result = 1 + 1
        if (result == 2) {
            resolve(() => {
                document.body.style.backgroundColor = 'black'
            })
        } else
            reject("Something wrong")
    }, 2000);

})

p.then((success) => {
    success()
}
)

console.log("1");
console.log("1");
console.log("1");