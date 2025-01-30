let obj = {
    name : "varun",
    id : 1,
    designation : "developer"

}
console .log(obj);
let obj1 = JSON.stringify(obj)
console.log(obj1);
let obj2 = JSON.parse(obj1)
console.log(obj2);

// json.stringify converts javascript object to string and json.parse converts string to javascript object
//  we can fetch the json by
// 1) fetch() method
 // 2) axios library
//   3) AJAX

// let a = window.fetch()
// console.log(a);
// window.fetch("data.json") // it will accept parameter
// .then((data) => console.log(data))

// Response {type: 'basic', url: 'http://127.0.0.1:5500/day13/data.json', redirected: false, status: 200, ok: true, …}
// array buffer its understandable by mechine only above respone is array buffer
window.fetch("data.json") // it will accept parameter
.then((data) => data.json())
.then((res) => {
    // console.log(res);
    // console.log(res[0]);
    // console.log(res[0].name);

res.map((x)=> {
    console.log(x);
    console.log(x.name);
    console.log(x.designation);
    console.log(x.id);

    document.body.innerHTML += `<h1>${x.name}</h1>`
    document.body.innerHTML += `<h1>${x.designation}</h1>` // to show in web page
})

    
    });
    // {
    //     "name": "John Doe",
    //     "age": 25,
    //     "city": "New York",
    //     "designation": "developer"     // we cannot use undefined and function()
    // },