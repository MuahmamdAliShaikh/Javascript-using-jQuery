$("document").ready(function(){
    $("#button").click(function(){
        var toAdd = $("input[name=ListItem]").val();
        $("ul").append("<li>"+toAdd+"</li>");
    })
    $(document).on("dblclick",'li',function(){
        $(this).toggleClass("strike").fadeOut("slow");
    })

    $('input').focus(function(){ /*this is for search bar clear before add any input*/ 
        $(this).val(' ');
    })
    $('ul').sortable();
})