// create a arthimatic function for function expressions for 3 numbers and find the largest number of 3 and input form the end user

let d = function () {
    a = Number(prompt('Enter a number'))
    b = Number(prompt('Enter another number'))
    c = Number(prompt('Enter a third number'))
    console.log(a+b+c)
    console.log(a-b-c)
    console.log(a*b*c)
    console.log(a/b/c)
    if(a > b && a > c) {
        return a;
    } else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(d)
d()