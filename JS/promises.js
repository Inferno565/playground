const test = ()=>{
  console.log("you called this inside resolve");
};
setTimeout(() => {
    console.log("2222");

}, 3000);

const p = new Promise((resolve, reject) => {
    setTimeout((result) => {
        result = 1 + 1
        if (result == 2) {
            resolve(test);
        } else
            reject("Something wrong")
    }, 2000);

})

p.then((value)=>{
  console.log("this is inside .then");
  console.log(value);
  value();
});

console.log("1");
console.log("1");
console.log("1");
