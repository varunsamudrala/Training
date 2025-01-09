a() // hoisting is not possible here

let a = function () {
    console.log("Hello");
}
console.log(a);
a()