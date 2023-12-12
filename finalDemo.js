//=========================================================================
function clickBlended(){
    $(".container").hide();
    $("#blendid").slideDown(500);
}
//=========================================================================
$(document).ready(function(){
    //초기 화면에서는 두번쨰 세번쨰 container 는 보여주지 않는다 

    $("#menuBox").html(menuCoffee)

    //이벤트 핸들러 연결하기 
    $("#btnBlendid").click(function(){
        $("#menuBox").html(menuBlendid)
    })

})
