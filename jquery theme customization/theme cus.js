$("document").ready(function(){
    $("#dialog").dialog({
        draggable: true,
        resizeable: true,
        closeOnEscape: true,
        modal: false,
        autoOpen: true
    })
    $("#date").datepicker({
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true
    })
})