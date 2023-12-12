// window.onload = function(){
//     let btn  =  document.querySelector(".button")
//     btn.onclick = function(){
//         alert("pressed!!")
//     }
//  }
 window.onload = function(){
    let btn  =  document.querySelector(".button")
    btn.onmousedown = function(){
        this.style.borderColor = 'red';
       
    }
    btn.onmouseup = function(){
        this.style.borderColor= 'gray';
    }
    btn.onmouseover = function(){
        this.style.backgroundColor = 'yellow'
    } 
    btn.onmouseout = function(){
        this.style.backgroundColor = "blue"
    }
} 
//onmouseover onmouseout 이벤트 완성하기 