

// Making a calculator using arithmetic  operators and if else conditionals.

let num1=56;
let num2=11;
let operator="+"
var result;


if(operator=="+"){ 
  result=num1+num2
}
  else if (operator=="-"){ 
    result=num1-num2
  }
  else if (operator=="*"){ 
    result=num1*num2
  }
  else if (operator=="/"){ 
    result=num1/num2
  }
  else if (operator=="%"){ 
    result=num1%num2  
  }
  else if(operator == "**"){
    result=num1**num2
  }
else console.log("Enter a valid operator");
console.log("The result of ", num1, operator, num2, "=", result );

