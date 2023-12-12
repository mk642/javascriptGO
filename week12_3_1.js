// window.onload = function(){
//     let btn  =  document.querySelector(".button")
//     btn.onclick = function(){
//         alert("pressed!!")
//     }
//  }
//========================================================
//Event Handler Zone 
//========================================================
let mouseDownHandler =function(){this.style.borderColor="red"}
let mouseUpHandler = function(){this.style.borderColor="gray"}
let mouseOverHandler = function(){this.style.backgroundColor="yellow"}
let mouseOutHandler = function(){this.style.backgroundColor="blue"}
//========================================================

window.onload = function(){
    let btn = document.querySelectorAll(".button")
    btn.forEach(function(btn) {
        btn.addEventListener("mousedown",mouseDownHandler);
        btn.addEventListener("mouseup",mouseUpHandler);
        btn.addEventListener("mouseover",mouseOverHandler);
        btn.addEventListener("mouseout",mouseOutHandler);
    });
}
    // btn.onmousedown = function(){
    //     this.style.borderColor = 'red';
       
    // }
    // btn.onmouseup = function(){
    //     this.style.borderColor= 'gray';
    // }
    // btn.onmouseover = function(){
    //     this.style.backgroundColor = 'yellow'
    // } 
    // btn.onmouseout = function(){
    //     this.style.backgroundColor = "blue"
    // }

