function parent() {
    function child() {
        console.log('I am a child function');  // its as a local scope because it written in block
    }
    child(); // the interpreter will go to function declaration the to function call then inside the function
}

console.log(parent())


var a = 10;
let b = 20; // the let is local variable that cannot be accessed in side the function but we can access it due to lexical function or scope change 
funtion parent1(){
    console.log(a); 
    console.log(b); 
} 
// output a= 10;
// output b= 20;











var a = 10;
let b = 20; // the let is local variable that cannot be accessed in side the function but we can access it due to lexical function or scope change
funtion parent1(){
    a = "hello world";
    b - "world"
    console.log(a); 
    console.log(b); 
    console.log(this.a) // this keyword help to access global scope in side the local scope( the "this" will go to the var to check for varible "b" if its define by "let" then the out put will be printed as undefined )
}   console.log(this.b) // ( the "this" will go to the var to check for varible "b" if its define by "let" then the out put will be printed as undefined )