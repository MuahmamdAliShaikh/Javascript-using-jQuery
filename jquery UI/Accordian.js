$("document").ready(function(){
    $("#div1").accordion({
        collapsible:true,
        icons:{header:"ui-icon-caret-1-se"},activeheader:" ui-icon-caret-1-nw",
        animate:2000,
        event:"mouseover"
        
    });
})