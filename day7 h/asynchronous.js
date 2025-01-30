// function main(m,n) {
//     for(let i = m ; i<=n ; i++) {
//         console.log(i);
//     }
// }
// main(1,100000);

// function demo() {
//     console.log("numbers printed");
// }
// demo();
// asynchronous : making a wave for other functions to execute
// there are two methods that will convert the synchronous function to asynchronous function
// 1) set timeout accepts two functions delay time and callbacck function(in delay time it will print output onetime)
// 2)set interval (in delay time it will print output continuously)
// not all the time asynchronous function will be executed
// function main(m,n) { 
// window.setTimeout(() => {
//     for(let i = m ; i<=n ; i++) {
//         console.log(i);
//     }
// }, 5000)
// }

// main(1,100000);

// function demo() {
//     console.log("numbers printed");
// }
// demo();

    
// window.setInterval(() => {
//     console.log("after every 5 seconds");
// },5000)
// promise is an object
// used to look after the asynchronous function
// it as three phases
 // pending : function is not completed (it will be resolve or reject)
 // fulfilled : function is completed successfully (resolve)(async fun working properly   -- .then()it will accept callback if resolve working properly)
 // rejected : function is completed with error(asyn fun not working properly -- .catch() its a higher order function it will call callback once)
 // promise is an object so we can use.then() and.catch() method
 //.then() method will execute if promise is fulfilled
 //.catch() method will execute if promise is rejected
 
 // promise can be created using new Promise() constructor
 // promise constructor accepts callback function with two arguments resolve and reject
 // resolve(value) : resolve the promise with given value
 // reject(reason) : reject the promise with given reason
 // promise chaining : we can use.then() method to chain multiple.catch() method to handle error
//  syntax:
//  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise fulfilled successfully");
//     }, 2000)
//     })
//     .then(cbf)
//     .catch(cbf)
let online = window.navigator.online     // online is a  menthod it will check that my device is connect to internet are not

new Promise((resolve, reject) => {
       setTimeout(() => {
        if(online){
            return resolve("You are online");
        }else{
            return reject("You are offline");
        }
    }, 2000)
})
    .then(() => console.log("working..."))
    .catch(() => console.log("Failed to connect"))