let a = () => console.log("hello world")
console.log(a);
a();  // calling the function
// => fat arrow


let b = ()=> { return "hello world"}
console.log(b);
console.log(b());

let main = (task) => {
    console.log(task);
    console.log(task());
}
main(() => {
    return "iam cbi"
})