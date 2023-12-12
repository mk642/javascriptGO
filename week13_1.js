//===============================================================================================
//event handler zone
function gid(id){
    return document.getElementById(id)
}
//===============================================================================================





let OnFocusHandler = function(){
    this.style.backgroundColor = 'yellow';
}

let OnblurHandler = function(){
    this.style.backgroundColor = 'white';
}
let OnkeyDownHandler = function(event){
    if(event.keyCode == 13 ){
        AppendRow(this.value)
        this.value = "";
    
}
}
//==============================================================================
// 어떤행의 두번쨰 셀(컬럼)을 클릭하면 해당행을 삭제한다 . 
let deleteRow = function(){
    gid("output").innerHTML = this.parentNode.rowIndex-1
    //해당행을 삭제한다 . 
    gid("tbody").deleteRow(rowIndex); 
}
//==============================================================================
// input tag에 내용을 입력한 후에 ,테이블의 특정행을 마우스로 클릭하면 
//클릭한 행의 앞에 새 행을 생성하고 input tag 에 입력된 내용을 저장한다. 
let insertFront  = function(){
    //input tag 에 입력한 내용을 가져온다 . 
    let input = gid("input");
    if(input.value.trim == "")
        return;
    // 테이블에서 클릭한 행의 인덱스를 확인한다 . 
      gid("output").innerHTML = this.parentNode.rowIndex-1
      let tbody = gid("tbody")
      let newRow =tbody.insertRow(rowIndex);
      let cell0 = newRow.insertCell(0)
      let cell1 = newRow.insertCell(1)
    //새로생성된 셀들의 내용을 저장한다 . 
    cell0.innerHTML = "<strong>" + input.value + "</strong> " ;
    cell0.addEventListener("click",insertFront);
    cell1.innerHTML = input.value.length;
    cell1.addEventListener("click",deleteRow)
    //INPUT 내용을 삭제 한다 
    input.value ="";
}



let AppendRow=function(newWord){
    //tbody 객체를 먼저 가져온다 
    let tbody = gid("tbody");
    //가져온 tbody객체를 통해서 새  행을 하나 생성한다 .
    let newRow = tbody.insertRow(tbody.rows.length);
    // 새로 생성된 newRow행 객체를 이용하여 행 내부에 들어갈 칼럼 (cell)들을 생성한다 . 
    let cell0 = newRow.insertCell(0)
    let cell1 = newRow.insertCell(1)
    //새로생성된 셀들의 내용을 저장한다 . 
    cell0.innerHTML =  newWord ;
    cell0.addEventListener("click",AppendRow);
    cell1.innerHTML = newWord.length;
    cell1.addEventListener("click",deleteRow)
}

//===============================================================================================
window.onload = function(){
    //1.input 태그 객체의 이벤트 핸들러 연결한다 . 
    let input = gid("input")
    input.addEventListener("focus",OnFocusHandler)
    input.addEventListener("blur",OnblurHandler)
    input.addEventListener("keydown",OnkeyDownHandler)
}
//===============================================================================================
//엔터키 입력시 입력내용출력하기 