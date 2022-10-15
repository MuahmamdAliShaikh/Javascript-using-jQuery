$("document").ready(function(){
    $("#tool").tooltip({
        track:true,
        content:"This is the place for Name",  /*this is the text of title*/
        show:{effect:"pulsate",duration:2000,delay:250},
        hide:{effect:"explode",duration:2000}
        // effect:slideDown/highlight/pulsate

    });
})