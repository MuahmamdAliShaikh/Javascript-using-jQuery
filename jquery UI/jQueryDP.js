$("document").ready(function(){
    $("#date").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth:true,
        changeYear:true,
        minDate:new Date(2016,1,5),
        maxDate:new Date(2023,1,6),
        numberOfMonths: 2
// we can go through all the functions from jquery UI
    });
})
