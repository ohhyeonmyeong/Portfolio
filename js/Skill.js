$(document).ready(function(){

    // stroke-dashoffset: calc(440 - 440 * 80 / 100);

    var startCount = 0;

    $("#circle_bar .cont").each(function(index){
        var sel_count = $(this).find(".count").attr("data-limit");

        $(this).find("circle:eq(1)").css("stroke-dashoffset", `calc(440 - 440 * ${sel_count} / 100)`);

        var counter = setInterval (function(){
            if(startCount < sel_count){
                startCount++;
                $(".cont").eq(index).find(".count").text(startCount);
            }else if(startCount == sel_count){
                $(".cont").eq(index).find(".count").text(sel_count);
            }else{
                clearInterval(counter);
            }
        }, 50);
    });


});