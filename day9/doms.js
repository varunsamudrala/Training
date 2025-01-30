// unnary operator "Typeof" type of data type and document is an object
// dynamic title by doucument.title = "varun"
console.log(window);
console.log(window.document);
console.log(document.title);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
document.title = "varun"
// not all tags can be targeted directly by document
let link = document.links
console.log(link)
for (let i = 0; i < link.length; i++) {
    console.log(link[i]);
    link[i].className = "ln"
    link[i].href = "http://www.xnxx.com"
    link[i].target = "_blank" 
    console.log("----------------------------------")  // for seperation purpose only  for better readability in console.log()  in real world application you don't need this line.  
    // you can manipulate your web page using these properties and methods.  
    // for example, you can add a class to a link, change its href, or open it in a new tab.  
    // these changes will reflect on the webpage immediately.  
    // remember to always test your changes in a browser before deploying them to production.
    
}
// this all are indirect access
// document.getElementById( "link" )
// document.getElementByClassName( "value" )
// document.getElementByTagName( "value" )
// document.getElementByName( "value" )
// document.querySelector( "value" )
// document.querySelectorAll( "value" )
let a = document.getElementsById("demo")
console.log(a)
console.log(a.textContent)
a.textContent = "MAIN CHARACTER"
a.style.backgroundColor = "red"
a.style.textAlign = "center"



let b= document.getElementsByClassName("m1")
console.log(b);
console.log(b[0]);
console.log(b[0]).textContent =  "kavya"
b[0].style.backgroundColor = "blue"

let c = document.getElementsByTagName("p")
console.log(c);
c[1].style.color = "red"
c[1].textContent = "hello"
// dom uses camel case