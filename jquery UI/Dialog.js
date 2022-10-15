$("document").ready(function(){
    $("#btn1").click(function(){
        $("#div1").dialog("open");
    })
    $("#div1").dialog({
        title:"Title using property",
        draggable: false,
        resizable:false,
        closeOnEscape: false,
        modal: true,
        autoOpen: false
    })
});