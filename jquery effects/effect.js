$("document").ready(function(){

$("#btn1").click(function(){
    $("#img1").hide(2000);    /*2000 means it will take 2 sec for hide and show*/
})

$("#btn2").click(function(){
    $("#img1").show(2000);
})

$("#btn3").click(function(){
    $("#img1").toggle(3000);
})

$("#btn4").click(function(){
    $("#img1").fadeIn(2000);
})

$("#btn5").click(function(){
    $("#img1").fadeOut(2000);
})

$("#btn6").click(function(){
    $("#img1").fadeToggle(2000);
})

$("#btn7").click(function(){
    $("#img1").slideUp(2000);
})

$("#btn8").click(function(){
    $("#img1").slideDown(2000);
})
$("#btn9").click(function(){
    $("#img1").slideToggle(2000);
})

$("#btn10").click(function(){
    $("#img1").stop();
})

$("#btn").click(function(){
    $("#img").animate({
        left:'150px',
        opacity:'1',
        height:'400px',
        width:'400px'
    },'slow');
});

});
