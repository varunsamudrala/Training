let b = function (a) {
    console.log(a);
    console.log(arguments);
 /// arguments object will store argument if u given one parameter for 3 arguments then we can us arguments object to print the remaining arguments witn are stored in arrays format  without parameters
    console.log(arguments[1]);
    console.log(arguments[2]);
}
b(10 ,20 ,30)
