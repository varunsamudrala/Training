function demo() {
    console.log("hello world")
}

let a = document.getElementById("demo1")
console.log(a);

a.onclick = function(e) {
    console.log(e);   // it will come under pointer event
   let res = Math.round(Math.random()*10000).toString(16)
   console.log(res);
   document.body.style.backgroundColor = `#${res}`
}

// #ffff exdecimal number like after 9 it is abcd.....etc
// let res = Math.random() print decimals
// let res = Math.random()*10000) two decimal point 22.4477


let demo2 = document.getElementById("demo2")
console.log(demo2);

let color = window.prompt("enter any color name")
console.log(color);

demo2.innerHTML = color // it print the empy button text with enduser desired color
demo2.onmouseover = () => {
    document.body.style.backgroundColor = `${color}`
    document.body.style.transition = "ease all 3s" // after clicking on it will wait for 3s the "ease all" will start slowly and end slowly
}



let demo4= document.getElementById("demo4")
console.log(demo4);

demo4.addEventListener("click", () => {
    let demo3 = document.getElementById("demo3").value
    console.log(demo3);
    let speech = new SpeechSynthesisUtterance
    console.log(speech);
    speech.text = demo3
    speechSynthesis.speak(speech)
});