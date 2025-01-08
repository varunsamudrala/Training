function operations() {
    let a = prompt("Enter a number: ");
    let b = prompt("Enter a character: ");
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    if(b!=0){
        console.log(a/b);
    }else{
        console.log("Error: Division by zero is not allowed");
    }
    console.log(a%b);    
}
operations();

