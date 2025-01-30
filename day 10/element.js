let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);

d[1].style.backgroundColor = "crimson"


// console.log(document.body.childNodes)
// document.querySelector
// --> we have pass value with css symbols
// --> will return reference of first-element
let e = document.querySelector("#demo")
console.log(e);

let e1 = document.querySelector(".demo1")

console.log(e1);
// document.querySelectorAll
// --> we have pass value with css symbols
//--> will return reference of first-element in node list

let f = document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll(".demo1")

console.log(f1);
console.log(f1[1]);

// events in dom
// -------------------
// -> it is an action performed by end-user on web page 

// types:
// 1) key-board event
     // a) keydown
     // b) keyup
     // c) keypress
 // 2) mouse-event
        // a) click
        // b) dbclick
        // c) mousedown
        // d) mouseup
        // e) mousemove
        // f) mouseover
        // g) mouseout
        // h) wheel
        // i) contextmenu
 // 2) input-event
   // a) change
   // b) input
   // c) focus
   // d) blur
   // e) select
   // f) reset
   // g) submit
 // 2) form-event
   // a) submit
   // b) reset
   // c) focusin
   // d) focusout
   // e) load
   // f) unload
   // g) beforeunload
 // 2) drag-and-drop-event
     // a) drag
     // b) dragstart
     // c) dragend
     // d) dragenter
     // e) dragleave
     // f) dragover
     // g) drop
 // 3) media-event
 // 3) form-event
 // 4) window-event
 // 5) custom-event
//  6) pionter-event
    // a) pointerdown
    // b) pointerup
    // c) pointermove
    // d) pointerover
    // e) pointerout
    // f) pointerenter
    // g) pointerleave
    // h) pointercancel

// event-listeners
