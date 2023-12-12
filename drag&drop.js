//=======================================================
// Global Variable Zone
//=======================================================
let draggingCard = null;    // 현재 드래그 중인 카드 객체
let dragoverBox = null;     // 드래그 중인 카드 객체가 올라가있는 박스 객체
let dragOverCard = null;    // 드래그 중인 카드 객체가 올라가있는 카드 객체
//=======================================================
// Card Event Handler
//=======================================================
function onDragStartCard(ev) {
    draggingCard = this;    // 드래깅 시작 카드를 드래깅 중인 카드로 등록
    this.classList.add("draggingCard");
}

function onDragEndCard(ev) {
    draggingCard = null;    // 드래그 중인 카드가 없으므로 설정
    this.classList.remove("draggingCard");

    // DragOver 상태에서 드래깅이 종료되면 DragLeave 이벤트가 발생하지 않고
    // 종료되었기 때문에 Box 배경색이 복구되지 않는다. 그러므로 추가 정리가 필요하다.
   /* 
   if(dragoverBox) {
        dragOverBox.classList.remove("overBox");
        dragoverBox = null;
    }   
    */
    if(dragOverCard) {
        dragOverCard.classList.remove("overCard");
        dragOverCard = null;
    }
    if(dragoverBox){
        dragoverBox.classList.remove("overBox")
        dragoverBox = null;
    }
}

function onDragOverCard(ev) {
    ev.preventDefault();
    dragOverCard = this;    
    this.classList.add("overCard");
}

function onDragLeaveCard(ev) {
    ev.preventDefault();
    dragOverCard = null;
    this.classList.remove("overCard");
}

function onDropCard(ev) {
    ev.preventDefault();
    this.appendChild(draggingCard);
}
//=======================================================
// Box Event Handler
//=======================================================
function onDragOverBox(ev) {
    ev.preventDefault();
    dragoverBox = this;
    this.classList.add("overBox");
}

function onDragLeaveBox(ev) {
    dragoverBox = null;
    this.classList.remove("overBox");
}

function onDropBox(ev) {
    ev.preventDefault();
    if(dragOverCard){
        this.insertBefore(draggingCard,dragOverCard);
    }else{
        this.appendChild(draggingCard); 
    }
    // Drop 이벤트가 발생한 박스 객체(this)의 자식 노드로 드래그 중인 객체를 연결한다.
    //카드위에 놓은것인가 아니면 박스위에 놓은것인지 확인이 필요함 
    dragOverBox = null;
    this.classList.remove("overBox");
}
//=======================================================
$(document).ready(function() {
    let cardArray = document.getElementsByClassName("card");
    for(let card of cardArray) {
        card.addEventListener("dragstart",onDragStartCard);
        card.addEventListener("dragend",onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave",onDragLeaveCard);
    }
})
//=======================================================
$(document).ready(function(){
    let boxArray = document.getElementsByClassName("box");
    for(let box of boxArray) {
        box.addEventListener("dragover",onDragOverBox);
        box.addEventListener("dragleave",onDragLeaveBox);
        box.addEventListener("drop",onDropBox);
    }
})
/*
let boxArray = document.querySelectorAll(".box");
for(let box of boxArray) {
    box.addEventListener("dragover",onDragOverBox);
    box.addEventListener("dragleaver",onDragLeaveBox);
}
*/
//=======================================================