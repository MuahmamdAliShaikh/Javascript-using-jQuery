$(document).ready(function() {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);
    
    $('.button').on('click', function(evt) {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);
      
    
    if(buttonPressed === "C"){
      result=0;
      currentEntry="0";
    }
    else if(buttonPressed ==="CE"){
      currentEntry="0";
    }
    else if(buttonPressed ==="back"){
      currentEntry=currentEntry.substring(0,currentEntry.length-1)

    }
    else if(buttonPressed === "+/-"){
      currentEntry*=-1
    }
    else if(buttonPressed ==="."){
      currentEntry+='.';
    }
    else if(isNumber(buttonPressed)){   /*isNumber() function is used to check whether the given object parameter is number or not. If the given object is a number then it returns True value otherwise, it returns False.*/
      if(currentEntry==='0')currentEntry = buttonPressed
      else(currentEntry = currentEntry + buttonPressed);
    }
    else if(isOperator(buttonPressed)){
      prevEntry = parseFloat(currentEntry);  /*parse float yahan is liya used kiya ha ka agar hum number ki jaga koi string put kara dein ya phir operator  tou ya Nan return kara*/ 
      operation = buttonPressed;
      currentEntry=" ";

    }
    else if(buttonPressed === "%"){
      currentEntry=currentEntry/100;
    }
    else if (buttonPressed==="sqrt"){
      currentEntry = Math.sqrt(currentEntry);
    }
    else if(buttonPressed==="1/x"){
      currentEntry=1/currentEntry;

    }
    else if(buttonPressed==="pi"){
      currentEntry = Math.PI
    }
    else if(buttonPressed==='='){
      currentEntry = operate(prevEntry,currentEntry,operation)
      operation=null
    }
    updateScreen(currentEntry);
  });
});

updateScreen = function(displayValue){
  var displayValue=displayValue.toString();  /*toString returns the number as a string*/
  $('.screen').html(displayValue.substring(0,10));
}
isNumber=function(value){
  return !isNaN(value);
}  
isOperator=function(value){
  return value === '/'|| value === '*' || value === '+'|| value === '-';
}
operate = function(a,b,operation){
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a,b,operation)
  if(operation === '+') return a+b;
  if(operation === '-') return a-b;
  if(operation === '*') return a*b;
  if(operation === '/') return a/b;
}

 
  
  