/*$("document").ready(function(){
$("#btn").click(function(){
    $("#img").animate({
        left:'150px',
        opacity:'1',
        height:'400px',
        width:'400px'
    },'slow',function(){
        alert("Animated")
    })
});

});*/

/*$("document").ready(function(){
$("#btn").click(function(){
   $('#img').slideUp(2000,function(){
    $('#img').slideDown(2000);
   })
});

});*/

/*Below is the example of chaining*/
$("document").ready(function(){
$("#btn").click(function(){
   $('#img').slideUp(2000).css('opacity','1').slideDown(3000).fadeOut(2000).fadeIn(2000);
});

});

//$("img").animate({},2000,function(){})  #the last function over here is callback function 
//We are not used callback function only with animate method but we can used it with other methods
//Chaining is when you call a method on an object, the method does something, and then returns the original object. It literally is like a link in a chain. Callbacks are like (upside-down) trees.