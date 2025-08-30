const add = (...nums) => {
    const sumArray = nums.reduce((total, el) => {
        return total + el
    })
    return sumArray
}
console.log(add(1, 3, 4, 5))
// Use of rest operator

const BRANDS = ["KOENIGSEGG", "AUDI", "PAGANI"]
const CARS = ["CCX", "R8 Le Mans Quattro", "Huyara"]
const names=[...BRANDS, ...CARS]
console.log(names)
//use of spread operator


