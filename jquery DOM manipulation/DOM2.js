$("document").ready(function(){
    /*$("#btn1").click(function(){
        $(".div1").append("<p>This is paragraph 2<p>")
    })*/

    $("#btn1").click(function(){
        $(".div1").append('<img src = "/Images/J1.png" height="100px" width="100px">')
    })
        $("#btn2").click(function(){
            $(".div1").prepend("<p>This is paragraph 2 using prepend<p>")
        })
        $("#btn3").click(function(){
            $(".div1").before("<p>This is paragraph 2 using before<p>")
        })
        $("#btn4").click(function(){
            $(".div1").after("<p>This is paragraph 2 using after<p>")
        })
        $("#btn5").click(function(){
            $(".div1").remove()
        })
        $("#btn6").click(function(){
            $(".div1").empty()
        })


});