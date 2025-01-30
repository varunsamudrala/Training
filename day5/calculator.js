let main = (a ,b , task) => {
 console.log(task)
 console.log(task(a , b))
}
main( a = Number(prompt("Enter")),
 b = Number(prompt("Enter")),
(a , b) => {
    return  a+b 
})
main( a = Number(prompt("Enter")),
      b = Number(prompt("Enter")),
(a , b) => {
    return  a-b 
})
main( a = Number(prompt("Enter")),
 b = Number(prompt("Enter")),
(a , b) => {
    return  a*b 
})

    