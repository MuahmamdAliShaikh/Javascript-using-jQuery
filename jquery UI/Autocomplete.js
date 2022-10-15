/*var language=["HTML","CSS","Javascript","PHP","Java","C","C++","C#","Perl","Ruby","Scala","COBOL","Basic","Fortran","lisp","Typescript"]*/
/*source:language*/

$("document").ready(function(){
    $("#input").autocomplete({
        source:["HTML","CSS","Javascript","PHP","Java","C","C++","C#","Perl","Ruby","Scala","COBOL","Basic","Fortran","lisp","Typescript"]
    },{
        delay:2000,
        minLength:3,
        autoFocus:true
    })
});