console.log(start)

// global scope

var scope = 9;
console.log(scope);

// local scope

let localScope = "varun"
console.log(localScope);

const a = "fun"
console.log(a);
// block scope
{
var blockScope = "marry" // reintalling and redelcarionation possible here
console.log(blockScope);

const m = 6; // reintalling and redelcarionation not possible here so use this as first priority 
console.log(m);

let n = 7; // reintalling possible here and redelcarionation not possible here
console.log(n);
}
// end
console.log(stop)
