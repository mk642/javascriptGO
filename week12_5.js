//event handler zone 
let clearEventLog =function(){
    this.innerHTML = "";

}
//-------------------------------------------------
let mouseOut = function(){
    this.style.backgroundColor ="white"
    //이벤트 발생 내용을 div태그의 아이디 eventlog에 기록하는 코드를 작성하라 
    //예) mouse Enter divA
    let eventLog = document.getElementById("eventlog").innerHTML +="Mouse Out " + this.id +"<br>"
    event.stopPropagation();
}
let mouseOver = function(){
    this.style.backgroundColor ="yellow"
    //이벤트 발생 내용을 div태그의 아이디 eventlog에 기록하는 코드를 작성하라 
    //예) mouse Enter divA
    let eventLog = document.getElementById("eventlog").innerHTML +="Mouse Over " + this.id +"<br>"
    //이벤트 전파를 중단시킨다 . 
    event.stopPropagation();
}
let mouseLeave = function(){
    this.style.borderColor = "blue"
    //이벤트 발생 내용을 div태그의 아이디 eventlog에 기록하는 코드를 작성하라 
    //예) mouse Leave divB
    let eventLog = document.getElementById("eventlog").innerHTML +="Mouse left " + this.id +"<br>"
}
let mouseEenter = function(){
    this.style.borderColor ="gray"
    //이벤트 발생 내용을 div태그의 아이디 eventlog에 기록하는 코드를 작성하라 
    //예) mouse Enter divA
    let eventLog = document.getElementById("eventlog").innerHTML +="Mouse Enterd " + this.id +"<br>"
}

window.onload = function(){
    let divArray = document.getElementsByClassName("itme")
    for(let div of divArray){
        div.addEventListener("mouseenter",mouseEenter)
        div.addEventListener("mouseout",mouseOut)
        div.addEventListener("mouseover",mouseOver)
        div.addEventListener("mouseleave",mouseLeave)


    }
    document.getElementById("eventlog").addEventListener("dblclick",clearEventLog);
}
//----------------------------------------------------------------------------------
