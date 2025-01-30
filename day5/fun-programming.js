f+unction main(task) {
    console.log(task(10 , 10 , 9 , 9));
}
main(function(a,b){
    return a + b
})
main(function(c,d){
    return c - d
})
main(function(a,c){
    return c * c                              // the arguments are not assigned to the same varibles
})

main(function(a,b,c,d){
    return (a + b + c + d) / 4
})