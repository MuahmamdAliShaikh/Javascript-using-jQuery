$("document").ready(function(){
    $("#dialog").dialog({
        draggable:true,
        resizeable:true,
        closeOnEscape:true,
        modal:false,
        autoOpen: true,
        height:250,
        width:250
    })
    $("#btn1").click(function(){
        //alert("GET is working")
        /*var modal=$("#dialog").dialog("option","modal")*/
        var modal=$("#dialog").dialog("option","height")
        alert(modal)
    })
    $("#btn2").click(function(){
        //alert("SET is working")
        $("#dialog").dialog("option","height",500)
        
    })
});
// Getup method is used to get the value of any particular property
// Setup method is used to change that particular value
